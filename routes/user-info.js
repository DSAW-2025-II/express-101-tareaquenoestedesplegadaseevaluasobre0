//Creación del router de user-info
const express = require('express')
const router = express.Router()

//Invocación del controlador
const controller = require('../controllers/UserController')

//Get del router que invoca al get del controlador
router.get('/:id', controller.get)

//Exportación del router
module.exports = router