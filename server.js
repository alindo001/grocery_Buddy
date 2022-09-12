const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const foodRoutes = require('./routes/food')
const itemsRoutes = require('./routes/items')
const methodOverride = require('method-override')



require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))

app.use('/', homeRoutes)
app.use('/food', foodRoutes)
app.use('/items', itemsRoutes)
app.use('/edit', foodRoutes)

 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    