const express = require('express') // import the module
//const app = require('express')
const app = express()      // invoke an object of the module class

// app.get
// the callback gets executed everytime a user gets to the root
app.get('/',(req, res)=>{
    res.status(200).send('Home Page')    // res.send is in express only 
})
// get the about page
app.get('/about',(req, res)=>{
    res.status(200).send('About page')    // res.send is in express only 
})
// get out of bounds || if you do anything to a resource thats not on my server 404
app.all('*',(req, res)=>{
    res.status(404).send('<h1>404 Not found</h1>')    // res.send is in express only 
})


// app.post
// app.put
// app.delete
// app.use for middleware

// app.listen
app.listen(5000, ()=>{
    console.log('Listening on 5000...')
})


