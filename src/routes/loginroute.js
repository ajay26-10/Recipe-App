const express = require ('express')

const path = require ('path')

const loginroute = express.Router();

loginroute.use(express.static(path.join(__dirname,'../../public')))

loginroute.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/static', 'login.html'));

})

loginroute.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/static', 'signup.html'));

})

module.exports=loginroute;