var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const userController = require('../controllers/userController');//cambiar nombre al indexController

/* crear sufijos Registro*/
router.get('/register', userController.register)

/* crear sufijos Login*/
router.get('/login', userController.login);

/* procesar sufijos Login*/
router.post('/login', userController.loginUser)

/* result prueba - POST*/
router.post('/register', userController.results)

router.post('/logout', userController.logout)

router.get('/detalle/:id', userController.detalle)


module.exports = router;