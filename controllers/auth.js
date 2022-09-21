const passport = require('passport')
const validator = require("validator")
// const User = require('../models/User')

exports.getLogin = (req, res, next) => {
    if(req.user){
        return res.redirect('/items')
    }
    res.render('login', {
        title: 'Login'
    })
}