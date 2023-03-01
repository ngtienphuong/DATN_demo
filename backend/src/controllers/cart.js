import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";
import joi from "joi";
import { id, act } from "../helpers/joiSchema";

export const getCart = async (req, res)=>{
    try {
        const {id} = req.user
        const response = await services.getCart(id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const addCart = async (req, res)=>{
    try {
        const {id} = req.user
        const response = await services.addCart(id, req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const deleteCart = async (req, res)=>{
    try {
        const response = await services.deleteCart(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}
export const deleteAllCart = async (req, res)=>{
    try {
        const response = await services.deleteAllCart(req.user)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const changeQuantityCart = async (req, res) => {
    try {
        const {error} = joi.object({id, act}).validate(req.body)
        if(error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await services.changeQuantityCart(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}