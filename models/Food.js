const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  storeName:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }

})

module.exports = mongoose.model('Food', FoodSchema)
