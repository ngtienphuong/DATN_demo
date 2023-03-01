import * as controllers from '../controllers'
import express from 'express'

const router = express.Router()

router.get('/product', controllers.insertProduct)
router.get('/brand', controllers.insertBrand)

module.exports = router