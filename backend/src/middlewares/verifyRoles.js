import { notAuth } from "./handleError"

export const isAdmin = (req, res, next) =>{
    const {role} = req.user
    if(role !== 'R1') return notAuth('Require role Admin', res)
    next()
}

export const isModerator = (req, res, next) =>{
    const {role} = req.user
    if(role !== 'R1' && role !== 'R2') return notAuth('Require role Admin or Moderator', res)
    next()
}

