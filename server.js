const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const hostname = 'localhost'

//http://localhost:5000/
app.get('/',(req,res)=>{
    res.end('<h1>Express App</h1><hr color="red">')
})

//http://localhost:5000/contact
app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Page</h1><hr color="red">')
})

app.listen(5000,()=>{
    console.log(`Sever running at http://${hostname}:${PORT}`)
})