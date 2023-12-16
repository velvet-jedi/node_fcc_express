var http = require('http')
var fs = require('fs')
const { error } = require('console')

http.createServer((req, res)=>{
    // const text = fs.readFileSync('./content/big.txt')
    // res.end(text)


// now lets refactor it 
/** The use of createReadStream with the pipe method causes
 *  the transfer encoding to be chunked.
 *  createReadStream creates a readable stream from the file 'big.txt'.
    pipe is used to connect the readable stream (fileStream) to the writable stream 
    (res, which is the HTTP response).
 */
    const fileStream = fs.createReadStream('./content/big.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
}).listen(5000)

// const { writeFileSync } = require('fs')

// for (let i = 0 ; i< 100000; i++){
//     writeFileSync('./content/big.txt', `hello ${i}\n`,{flag:'a'})
// }

/** 
 *  the file is really big and sending it over a network is bs
 *  content length header in dev tools will say that
 * 
 * Benefits of Chunked Transfer Encoding:

Chunked transfer encoding allows for streaming data, 
    meaning that the response can start being sent to the client before the entire file is read.
It is memory-efficient because the entire content doesn't need to
 be loaded into memory before sending it to the client.


 The fileStream.on('open', ...) event is triggered 
 when the file stream is open and ready for reading. At this point, the
  pipe method starts transferring data to the response stream (res).
The fileStream.on('error', ...) event is used to handle any errors that
 might occur during the stream
 * 
 */