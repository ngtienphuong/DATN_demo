import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";
import { id, name, subcat, avaliable, price, expiry, image, brand, description, ids, filename } from "../helpers/joiSchema";
import joi from "joi";
const cloudinary = require('cloudinary').v2;


export const getProduct = async (req, res)=>{
    try {
        const response = await services.getProductHome()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getProductCategory = async (req, res)=>{
    try {
        const subcat = req.params.subcat
        const response = await services.getProductCat(subcat)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getProDetail = async (req, res)=>{
    try {
        const id = req.params.id
        const response = await services.getProductDetail(id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}


export const creataNewProduct = async (req, res)=>{
    try {
        const fileData = req.file
        const {error} = joi.object({ name, subcat, avaliable, price, expiry, brand, description, image }).validate({...req.body, image: fileData?.path})
        if (error) {
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await services.creataProduct(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getOneProduct = async (req, res) =>{
    try {
        const response = await services.getOneProduct(req.params.id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const updateProduct = async (req, res)=>{
    try {
        const fileData = req.file
        const {error} = joi.object({ id}).validate({id: req.body.id})
        if (error) {
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await services.updateProduct(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getTrashProduct = async (req, res) => {
    try {
        const response = await services.getTrashProduct()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const changeTrashProduct = async (req, res) => {
    try {
        const {error} = joi.object({id}).validate(req.body)
        if(error){
            return badRequest(error.details[0].message, res)
        }
        const response = await services.changeTrashProduct(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const deleteProduct = async (req, res)=>{
    try {
        const {error} = joi.object({ ids, filename}).validate(req.query)
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.deleteProduct(req.query.ids, req.query.filename)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}