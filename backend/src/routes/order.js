import * as controllers from '../controllers'
import express from 'express'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()

router.use(verifyToken)
router.post('/', controllers.addOrder)
module.exports = router