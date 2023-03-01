import * as controllers from '../controllers'
import express from 'express'
import verifyToken from '../middlewares/verifyToken'
import {isAdmin, isModerator} from '../middlewares/verifyRoles'

const router = express.Router()
// PUBLIC ROUTES
router.get('/list',controllers.getAll)
// PRIVATE ROUTES
router.use(verifyToken)
router.get('/', controllers.getCurrent)

module.exports = router