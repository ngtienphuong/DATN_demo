import joi from 'joi'
import { badRequest, internalServerErrol } from '../middlewares/handleError'
import * as services from '../services'
import { id } from '../helpers/joiSchema'

export const addOrderDetail = async (req, res) =>{
    try {
        const response = await services.addOrderDetail(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}