/**
 *          Middlewares are functions that execute during request to server
 *          Middlewares are everywhere in express
 */

const express = require('express')
const app = express()

// req -> middleware -> response

const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url , time)
    //res.send('Testing')
    // pass the control to next function (which in our case would be another get route function)
    next()
}   

app.get('/', logger, (req, res)=>{
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method, url , time)
// if I want to do the same things for 15 different routes
    // use logger as a function but we keep getting a spinner in the browser
        // unless a middleware .send()s (ie ..end) a response, 
    
    res.send('Home')
    // like the /about and so on...
})

// app.get('/about',(req, res)=>{
app.get('/about', logger, (req, res)=>{
    res.send('About')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})