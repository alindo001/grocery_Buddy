const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const foodRoutes = require('./routes/food')
const itemsRoutes = require('./routes/items')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')

// Passport config
require('./config/passport')(passport)

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))

// For sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
}))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use('/', homeRoutes)
app.use('/food', foodRoutes)
app.use('/items', itemsRoutes)
app.use('/edit', foodRoutes)

 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    