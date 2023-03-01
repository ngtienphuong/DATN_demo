import * as controllers from '../controllers'
import express from 'express'
import passport from '../middlewares/passport'

const router = express.Router()

router.post('/register', controllers.register)
router.post('/login', controllers.login)
router.post('/refreshToken', controllers.refreshTokenCtrl)
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))
router.get('/google/callback', passport.authenticate('google'))

module.exports = router