const http = require('http')
                                    
/**     this callback invokes everytime the request comes in
 *  */ 
// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.end('Welcome to our homepage')
//     }else if(req.url === '/about'){
//         res.end('Know more about us')
//     }else{
//         res.end(`<h1>OOPS!</h1>`)
//     }
// });

// Using event emitter API
const server = http.createServer()
// emitting request event and then listening/responding to it
server.on('request', (req, res) => {
    res.end('Welcome')
})
// 'request' event emitted by the HTTP server. The server automatically emits the 'request' event when a new HTTP request is received
// safe to say that the manual emit method is not required as the HTTP object emits the builtin request event
server.listen(5000, ()=>{
    console.log('I am listening at port 5000')
})