// console.log('Express')

const http = require('http')
const {readFileSync} = require('fs');

// get all files and the server should serve all to let the client fetch all
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    // console.log('user hit the server')
    // lets give info about the response to the client USING HEADER METADATA for more control
    const url = req.url
    
    // homepage
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'}) // status codes and MIME type
        //res.write('<h1>home page</h1>')
        res.write(homePage)
        res.end()
    }
    
    // about page
    else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'}) // status codes and MIME type
        res.write('<h1>About page</h1>')
        res.end()
    }
    // css file
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})   // status codes and MIME type
        res.write(homeStyles)
        res.end()
    }

        // logo file
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})   // status codes and MIME type
        res.write(homeImage)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})   // status codes and MIME type
        res.write(homeLogic)
        res.end()
    }

    // 404
    else{
        res.writeHead(404, {'content-type':'text/html'}) // status codes and MIME type
        res.write('<h1>Not Found</h1>')
        res.end()
    }
    
    // console.log(req.method)
    // console.log(req.url)
})

server.listen(5000)