// for router demo
    // for login
const express = require('express')
const router = express.Router()
    
//app.post('/login',(req, res)=>{   
// router.post('/login',(req, res)=>{   
router.post('/',(req, res)=>{       
    const { name } = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send("Please provide a username")
})


module.exports = router