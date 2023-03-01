import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";
import joi from "joi";
import { id, name, image } from "../helpers/joiSchema";
const cloudinary = require("cloudinary").v2

export const getAllBrand = async (req, res)=>{
    try {
        const response = await services.getAllBrand()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const addBrand = async (req, res)=>{
    try {
        const fileData = req.file
        const {error} = joi.object({ name, image }).validate({...req.body, image: fileData?.path})
        if (error) {
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await services.addBrand(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getOneBrand = async (req, res) =>{
    try {
        const response = await services.getOneBrand(req.params.id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)   
    }
}

export const editBrand = async (req, res)=>{
    try {
        const fileData = req.file
        const {error} = joi.object({ id, name }).validate({...req.body})
        if (error) {
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await services.editBrand(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getTrashBrand = async (req, res) => {
    try {
        const response = await services.getTrashBrand()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const changeTrashBrand = async (req, res) => {
    try {
        const {error} = joi.object({id}).validate(req.body)
        if(error){
            return badRequest(error.details[0].message, res)
        }
        const response = await services.changeTrashBrand(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}