const http = require('http')
                                    // req - incoming request object
                                    // res - response object
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }else if(req.url === '/about'){
        res.end('Know more about us')
    }else{
        res.end(`<h1>OOPS!</h1>`)
    }
});
server.listen(5000, ()=>{
    console.log('I am listening at port 5000')
})