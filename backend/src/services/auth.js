import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { notAuth } from '../middlewares/handleError'

const hashPass = password =>bcrypt.hashSync(password, bcrypt.genSaltSync(8))

export const register = ({email, password}) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where:{email},
            defaults: {
                email,
                password: hashPass(password)
            }
        })
        const accessToken = response[1]? jwt.sign({id: response[0].id, email: response[0].email, role: response[0].role}, process.env.JWT_SECRET, {expiresIn: '5s'}) :null
        const refreshToken = response[1]? jwt.sign({id: response[0].id}, process.env.JWT_SECRET_FRESH_TOKEN, {expiresIn: '10d'}) :null
        
        resolve({
            err: response[1]?0:1,
            mes: response[1]?'Register successfully':'Email is used',
            'accessToken': accessToken? `Bearer ${accessToken}`: null,
            'refreshToken': refreshToken
        })
        if(refreshToken){
            await db.User.update({
                refreshToken: refreshToken
            },{
                where:{id: response[0].id}
            })
        }
    } catch (error) {
        reject(error)
    }
})

export const login = ({email, password}) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where:{email},
            raw: true
        })
        const isChecked = response && bcrypt.compareSync(password, response.password)
        const accessToken = isChecked ? jwt.sign({id: response.id, email: response.email, role: response.role}, process.env.JWT_SECRET,{expiresIn: '1d'}):null
        const refreshToken = isChecked? jwt.sign({id: response.id}, process.env.JWT_SECRET_FRESH_TOKEN, {expiresIn: '10d'}) :null
        resolve({
            err: accessToken?0:1,
            mes: accessToken?'Login successfully':response?'Password is wrong':'Email is not registered',
            'accessToken': accessToken? `Bearer ${accessToken}`:null,
            'refreshToken': refreshToken
        })
        if(refreshToken){
            await db.User.update({
                refreshToken: refreshToken
            },{
                where:{id: response.id}
            })
        }

    } catch (error) {
        reject(error)
    }
})

export const refreshToken = (refreshToken) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: {refreshToken}
        })
        if(response){
            jwt.verify(refreshToken, process.env.JWT_SECRET_FRESH_TOKEN, (err)=>{
                if(err) 
                resolve({
                    err: 1,
                    mes: 'Refresh Token expired. Require login credentials'
                })
                else{
                    const accessToken = jwt.sign({id: response.id, email: response.email, role: response.role}, process.env.JWT_SECRET,{expiresIn: '5s'})
                    resolve({
                        err: accessToken? 0 : 1,
                        mes: accessToken? 'Ok' : 'Fail to generate new refresh token. Let try again',
                        'accessToken': accessToken? `Bearer ${accessToken}`:null,
                        'refreshToken': refreshToken
                    })
                }
            })
        }
    } catch (error) {
        reject(error)
    }
})

