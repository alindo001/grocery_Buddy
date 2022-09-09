const { render } = require('ejs')
const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find()
            res.render('todos.ejs', {todos: todoItems})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create(
                {
                todo: 
                req.body.todoItem, 
                storeName: req.body.storeName,
                price:req.body.price
            })
            console.log('Grocery Item Has Been Added')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true,
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Item')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    getEdit: async (req,res)=>{
        try{
            const todoItems = await Todo.findById(req.params.id)            
            res.render('edit.ejs', {todos: todoItems, price:todoItems.price, storeName: todoItems.storeName, _id:todoItems._id})
        }catch(err){
            console.log(err)
        }
    },
    editItem: async (req, res) => {
        try{
            let item = await Todo.findByIdAndUpdate(req.params.id,{
                price: req.body.price,
            })
            console.log("Price Updated")
            res.redirect('/todos')
        }catch(err){
            console.err(err)
        }


    },


}    