const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
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
  }

})

module.exports = mongoose.model('Todo', TodoSchema)
