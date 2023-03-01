import * as controllers from '../controllers'
import express from 'express'
import verifyToken from '../middlewares/verifyToken'
import {isAdmin} from '../middlewares/verifyRoles'

const router = express.Router()

router.get('/',controllers.getSubcategory)


router.use(verifyToken)
router.use(isAdmin)
router.post('/',controllers.addSubcategory)
router.put('/',controllers.editSubcategory)
router.put('/trash',controllers.ChangeTrashSubcategory)
router.get('/trash',controllers.getTrashSubcategory)
router.get('/getOneSubcategory/:id',controllers.getOneSubcategory)



module.exports = router