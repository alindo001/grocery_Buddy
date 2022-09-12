const express = require('express')
const router = express.Router()
const foodController = require('../controllers/foods')

router.get('/', foodController.getItems)

router.get('/edit/:id', foodController.getEdit)

router.put('/edit/:id', foodController.editItem)

router.post('/createFood', foodController.createItem)

router.delete('/deleteItem', foodController.deleteItem)

module.exports = router