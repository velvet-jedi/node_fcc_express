const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }else if(req.url === '/about'){
        // BLOCKING CODE      OR    // SYNCHRONOUS
        for(let i = 0 ; i< 1000 ;i++){     //the nested loops block the execution of 
            for(let j = 0; j<1000; j++){   // subsequent code and incoming requests until they complete.
                console.log(`${i} ${j}`)
            }
        }
        res.end('Know more about us')
    }else{
        res.end(`<h1>OOPS!</h1>`)
    }
})
server.listen(5000, ()=>{
    console.log("Listening on prt 5000..")
})
