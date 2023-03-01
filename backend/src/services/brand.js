import db from "../models";
const cloudinary = require('cloudinary').v2

export const getAllBrand = () => new Promise(async (resolve, reject) =>{
    try {
        const response = await db.Brand.findAll({
            where:{trash:0}
        })
        resolve({
            err: 0,
            mes: 'Got',
            brandData: response
        })
    } catch (error) {
        reject(error);
    }
})

export const addBrand = (body, fileData) => new Promise(async (resolve, reject) =>{
    try {
        const response = await db.Brand.findOrCreate({
            where: {name: body.name},
            defaults:{
                ...body,
                image: fileData?.path,
                filename: fileData.filename
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Brand already exists'
        })
        if(fileData && !response[1]) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

export const getOneBrand = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Brand.findOne({
            where: {id}
        })
        resolve({
            err: 0,
            mes: 'Got',
            brandData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const editBrand = (body, fileData) => new Promise(async (resolve, reject) =>{
    try {
        const data = await db.Brand.findOne({
            where:{id: body.id}
        })
        if(fileData){
            body.image = fileData.path
            body.filename= fileData.filename
            cloudinary.uploader.destroy(data.filename)
        }
        
        const response = await db.Brand.update(
            {
                ...body
            },
            {
                where: {id: body.id}
            }
        )
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Editted' : 'Brand already exists',
        })
        if(fileData && !response) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

export const getTrashBrand = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Brand.findAll({
            where:{trash: 1}
        })
        resolve({
            err: 0,
            mes: 'Got',
            trashBrand: response
        })
    } catch (error) {
        reject(error)
    }
})

export const changeTrashBrand = (body) => new Promise(async (resolve, reject) => {
    try {
        const trash = await db.Brand.findOne({
            where: {id: body.id},
            raw: true
        })
        const response = await db.Brand.update(
            {
                trash: (trash.trash? 0 : 1)
            },
            {
                where: {id: body.id}
            }
        )
        resolve({
            err: response? 0 : 1,
            mes: trash.trash?`${body.id} restored`:`${body.id} moved to trash`
        })
    } catch (error) {
        reject(error)
    }
})