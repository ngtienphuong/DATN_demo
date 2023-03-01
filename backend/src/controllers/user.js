import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";

export const getCurrent = async (req, res)=>{
    try {
        const {id} = req.user
        const response = await services.getOne(id)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const getAll = async (req, res)=>{
    try {
        const response = await services.getAllUser()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}