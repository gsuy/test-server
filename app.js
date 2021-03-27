const express = require('express')
const app = express()
const axios = require('axios')
app.get('/',(req,res)=>{
    res.send('my gateway')
})

app.get('/test/',async (req,res)=>{
    try{
        res.send("Hello World")
    }catch(err){
        console.log(err);
        res.send(err)
    }
})

app.listen(8000,()=>console.log('server started'))