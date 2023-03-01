import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";
import joi from "joi";
import { id, name, category } from "../helpers/joiSchema";

export const getSubcategory = async (req, res)=>{
    try {
        const response = await services.getAllSubcategory()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const addSubcategory = async (req, res)=>{
    try {
        const { error} = joi.object({name, category}).validate(req.body)
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.addSubcategory(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getOneSubcategory = async (req, res)=>{
    try {
        const response = await services.getOneSubcategory(req.params.id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const ChangeTrashSubcategory = async (req, res)=>{
    try {
        const { error} = joi.object({ id}).validate(req.body)
        if(error){
            return badRequest(error.details[0].message)
        }
        const response = await services.ChangeTrashSubcategory(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getTrashSubcategory = async (req, res) => {
    try {
        const response = await services.getTrashSubcategory()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const editSubcategory = async (req, res) => {
    try {
        console.log(req.body)
        const { error} = joi.object({id, name, category}).validate(req.body)
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.editSubcategory(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}