import * as controllers from '../controllers'
import express from 'express'
import verifyToken from '../middlewares/verifyToken'
import {isAdmin} from '../middlewares/verifyRoles'

const router = express.Router()

router.get('/',controllers.getCategory)

router.use(verifyToken)
router.use(isAdmin)
router.post('/',controllers.addCategory)
router.post('/editCategory',controllers.EditCategory)
router.get('/getOneCategory/:id',controllers.getOneCategory)
router.get('/trash',controllers.getTrash)
router.put('/',controllers.trashCategory)


module.exports = router