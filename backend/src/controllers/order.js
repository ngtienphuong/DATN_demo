import joi from 'joi'
import { badRequest, internalServerErrol } from '../middlewares/handleError'
import * as services from '../services'
import { id } from '../helpers/joiSchema'

export const addOrder = async (req, res) =>{
    try {
        const {error} = joi.object({id}).validate({id: req.user.id})
        if(error){
            return badRequest(error.details[0].message, res)
        }
        console.log(req)
        const response = await services.addOrder(req.user.id, req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErrol(res)
    }
}