const Router = require('express').Router
const userController = require('../controllers/user-controller')
const router = new Router

router.get('/login', userController.login)
router.get('/auth', userController.auth)

module.exports = router