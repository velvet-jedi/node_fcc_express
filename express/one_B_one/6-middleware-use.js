// let's import the logger function from a separate file


const express = require('express') // from npm
const app = express()
const morgan = require('morgan')  // installed from npm
const logger = require('./logger') // custom made
const authorize = require('./authorize')

// what if i have 50 more routes and adding 
// logger code to every one is pain
// req -> middleware -> response

// 1. use vs route
// 2. options for middleware - our own / express built in middleware functions / third party
// app.use(express.static('./public'))   // static is a builtin middleware function
// morgan is a 3rd party middleware for logins npm i morgan
app.use(morgan('tiny'))

// app.use(logger)  //     || ORDER MATTERS   ||
// app.use will invoke logger middleware for all routes

// app.use('/api',logger)
// for certain url locations and subdirectories

// app.use([logger, authorize]) // multiple middleware functs in app.use
// app.use([authorize, logger]) // order matters
// if we onnly wanna check for authorization at a point /api/items?

// app.get('/',logger, (req, res)=>{
app.get('/', (req, res)=>{
    res.send('Home')
})


app.get('/about', (req, res)=>{
// app.get('/about',logger, (req, res)=>{
    res.send('About')
})



// app.get('/api/products',logger, (req, res)=>{
app.get('/api/products', (req, res)=>{
    res.send('Products')
})

// app.get('/api/items',logger, (req, res)=>{
// app.get('/api/items', [logger, authorize], (req, res)=>{
app.get('/api/items', (req, res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})
