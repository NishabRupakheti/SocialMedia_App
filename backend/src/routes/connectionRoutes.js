const connection = require('../controllers/connections')
const disconnect = require('../controllers/disconnect')
const showConnection = require('../controllers/showConnection')


const accessMiddleware = require("../middlewares/authMiddleware")

const express = require('express')
const router = express.Router()
 
router.post("/connect", accessMiddleware ,connection )
router.post("/disconnect", accessMiddleware , disconnect)
router.get('/connection', accessMiddleware , showConnection)

module.exports = router