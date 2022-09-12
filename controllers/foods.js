const { render } = require('ejs')
const Food = require('../models/Food')

module.exports = {
    getItems: async (req,res)=>{
        try{
            const todoItems = await Food.find().sort({price:""})
            res.render('food.ejs', {todos: todoItems})
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            await Food.create(
                {
                todo: req.body.foodItem,
                storeName: req.body.storeName,
                price:req.body.price
            })
            console.log('Grocery Item Has Been Added')
            res.redirect('/food')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Food.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
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
            await Food.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
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
            await Food.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Item')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    getEdit: async (req,res)=>{
        try{
            const todoItems = await Food.findById(req.params.id)            
            res.render('edit.ejs', {
                todos: todoItems.todo, 
                price:todoItems.price, 
                storeName: todoItems.storeName,
                 _id:todoItems._id
            })
        }catch(err){
            console.log(err)
        }
    },
    editItem: async (req, res) => {
        try{
            let item = await Food.findByIdAndUpdate(req.params.id,{
                todo:req.body.todoItem,
                price: req.body.price,
                storeName:req.body.storeName,
              

            })
            console.log(item)
            console.log("Price Updated")
            res.redirect('/food')
        }catch(err){
            console.err(err)
        }


    },


}    