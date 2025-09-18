const express = require('express')
const router = express.Router()

const controller = require('../controllers/UserController') //Se importa el controlador

router.get('/', controller.get)

module.exports = router