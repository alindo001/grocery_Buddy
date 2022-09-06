const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items')

router.get('/', itemsController.getIndex)

module.exports = router