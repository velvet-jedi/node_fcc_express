const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware       
    // a static is a file that the server doesnt have to change
    // all files can be dumped to public folder and express will
    // setup all the http codes and mime type and even the http methods

    //   MAGICAL ///
    
app.use(express.static('./public'))

// app.get('/',(req, res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//      adding to the static / public folder OPTION 1
//      Server side rendering using template engine OPTION 2
// })

app.all('*', (req, res)=>{
    res.status(404).send('Resource not found')     // method chaining
})

app.listen(5000, ()=>{
    console.log(`server is listening on port 5000...`);
})