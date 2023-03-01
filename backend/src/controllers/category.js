import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";
import joi from "joi";
import { name, status, id } from "../helpers/joiSchema";

export const getCategory = async (req, res)=>{
    try {
        const response = await services.getAllCategory()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getOneCategory = async (req, res)=>{
    try {
        const response = await services.getOneCategory(req.params.id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const addCategory = async (req, res)=>{
    try {
        const {error} = joi.object({name, status}).validate(req.body)
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.addCategory(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const EditCategory = async (req, res)=>{
    try {
        const {error} = joi.object({id, name, status}).validate(req.body)
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.EditCategory(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getTrash = async (req, res)=>{
    try {
        const response = await services.getTrash()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const trashCategory = async (req, res)=>{
    try {
        const {error} = joi.object({id}).validate(req.body)
        if(error){
            return badRequest(error.details[0].message, res)
        }
        const response = await services.trashCategory(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}