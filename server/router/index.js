const Router = require('express').Router
const userController = require('../controllers/user-controller')
const withAuthorization = require('../middlewares/withAuthorization')
const router = new Router

router.get('/login', userController.login)
// router.get('/me', userController.me)
router.get('/me', withAuthorization, userController.me)

module.exports = router