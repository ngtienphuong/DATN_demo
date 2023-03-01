import joi from 'joi'

export const email = joi.string().pattern(new RegExp('gmail.com$')).required()

export const password = joi.string().min(6).required()

export const id = joi.number().required()
export const name = joi.string().required()
export const subcat = joi.number().required()
export const avaliable = joi.number().required()
export const price = joi.number().required()
export const expiry = joi.string().required()
export const brand = joi.string().required()
export const description = joi.string().required()
export const image = joi.string().required()
export const ids = joi.array().required()
export const filename = joi.array().required()
export const refreshToken = joi.string().required()
export const status = joi.number().required()
export const category = joi.number().required()
export const act = joi.number().required()
export const phone = joi.required()
export const address = joi.required()