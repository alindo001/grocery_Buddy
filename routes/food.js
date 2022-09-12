const express = require('express')
const router = express.Router()
const foodController = require('../controllers/foods')

router.get('/', foodController.getItems)

router.get('/edit/:id', foodController.getEdit)

router.put('/edit/:id', foodController.editItem)

router.post('/createFood', foodController.createItem)

router.put('/markComplete', foodController.markComplete)

router.put('/markIncomplete', foodController.markIncomplete)

router.delete('/deleteTodo', foodController.deleteTodo)

module.exports = router