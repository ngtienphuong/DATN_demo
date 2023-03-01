import * as services from "../services";
import { internalServerErrol, badRequest } from "../middlewares/handleError";

export const insertProduct = async (req, res)=>{
    try {
        const response = await services.insertProduct()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}

export const insertBrand = async (req, res)=>{
    try {
        const response = await services.insertBrand()
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}