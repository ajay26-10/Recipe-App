const express = require ('express')
const app = express();

const pageroute = require('./src/routes/pageroute.js')

app.use('/',pageroute);

app.listen(3000,()=>{
    console.log("Server running succesfully in port 3000")
})