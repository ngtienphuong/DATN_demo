import db from '../models'
const cloudinary = require('cloudinary').v2;
import { Op } from 'sequelize';


export const getProductHome = () => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Product.findAll({
            where:[{trash:0}],
            include:[
                {model: db.Subcategory, as:'subcategoryData', attributes:['id', 'name', 'category']}
            ]
        })

        resolve({
            err: 0,
            mes: 'Got',
            productData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const getProductCat = (subcat) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Product.findAll({
            where:[{trash:0},{subcat: subcat}]
        })
        resolve({
            err: 0,
            mes: 'Got',
            productData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const getProductDetail = (id) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Product.findOne({
            where:[{trash:0},{id: id}],
            raw: true
        })
        const similar = await db.Product.findAll({
            where:[{[Op.not]:{id:id}},{trash:0},{subcat: response.subcat}],
            limit:4
        })
        resolve({
            err: 0,
            mes: 'Got',
            productData: response,
            similarData: similar
        })
    } catch (error) {
        reject(error)
    }
})

export const creataProduct = (body, fileData) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Product.findOrCreate({
            where: {name: body.name},
            defaults: {
                ...body,
                image: fileData?.path,
                filename: fileData.filename
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Product already exists',
        })
        if(fileData && !response[1]) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

export const getOneProduct = (id) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Product.findOne({
            where: { id: id}
        })
        resolve({
            err: 0,
            mes: 'Got',
            productData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const updateProduct = ({id, ...body}, fileData) => new Promise( async(resolve, reject) => {
    try {
        const data = await db.Product.findOne({
            where:{id: id},
            raw: true
        })
        if(fileData) {
            body.image = fileData.path
            body.filename= fileData.filename
            cloudinary.uploader.destroy(data.filename)
        }
        const response = await db.Product.update(
            {
                ...body
            }, 
            {
            where: { id }
            }
        )
        resolve({
            err: response[0] >0 ? 0 : 1,
            mes: response[0] >0 ? `${response[0]} book updated` : 'Not found book/Cannot update',
        })
        if(fileData && response[0] === 0) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

export const getTrashProduct = () => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Product.findAll({
            where:{trash: 1},
            include:[
                {model: db.Subcategory, as:'subcategoryData', attributes:['id', 'name', 'category']}
            ]
        })
        resolve({
            err: 0,
            mes: 'Got',
            trashProduct: response
        })
    } catch (error) {
        reject(error)
    }
})

export const changeTrashProduct = (body) =>new Promise(async(resolve, reject) =>{
    try {
        const trash = await db.Product.findOne({
            where:{ id: body.id},
            raw: true
        })
        const response = await db.Product.update(
            {
                trash: (trash.trash? 0 : 1)
            },
            {
                where:{id: body.id}
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

export const deleteProduct = (ids, filename) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Product.destroy({
            where: { id: ids }
        })
        resolve({
            err: response > 0 ? 0 : 1,
            mes: `${response} book(s) deteted`
        })
        cloudinary.api.delete_resources(filename)
    } catch (error) {
        reject(error)
    }
})