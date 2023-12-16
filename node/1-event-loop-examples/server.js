const http = require('http')

// Create an HTTP server
// Callbacks are often used to handle asynchronous a callback function is a function passed as an argument to another functio
// operations or to execute code after a certain task is completed.

const server = http.createServer((req, res) => {
        // This callback function is called whenever a request is received

    console.log('request event')// Log a message to the console when a request is received
    // Send a response with the message "hello world"
    res.end('hello world')
})

    // Start the server and listen on port 5000

server.listen(5000, ()=>{
    console.log('Server listening on port : 5000....')
})