const { render } = require('ejs')
const Food = require('../models/Food')

module.exports = {
    getItems: async (req,res)=>{
        try{
            const foodItems = await Food.find().sort({price:""})
            res.render('food.ejs', {items: foodItems})
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            await Food.create(
                {
                itemName: req.body.foodItem,
                storeName: req.body.storeName,
                price:req.body.price,
            })
            console.log('Grocery Item Has Been Added')
            res.redirect('/food')
        }catch(err){
            console.log(err)
        }
    },
    deleteItem: async (req, res)=>{
        console.log(req.body.itemIdFromJSFile)
        try{
            await Food.findOneAndDelete({_id:req.body.itemIdFromJSFile})
            console.log('Deleted Item')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    getEdit: async (req,res)=>{
        try{
            const foodItem = await Food.findById(req.params.id)            
            res.render('edit.ejs', {
                itemName: foodItem.itemName, 
                price:foodItem.price, 
                storeName: foodItem.storeName,
                 _id:foodItem._id,
                
            })
        }catch(err){
            console.log(err)
        }
    },
    editItem: async (req, res) => {
        try{
            let item = await Food.findByIdAndUpdate(req.params.id,{
                itemName:req.body.itemName,
                price: req.body.price,
                storeName:req.body.storeName,
                createdAt:Date.now(),
            })
            res.redirect('/food')
        }catch(err){
            console.err(err)
        }


    },

}    