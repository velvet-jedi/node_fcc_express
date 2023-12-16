// /** if we read a big file and store in a variable | MEMORY LOSS
//  * 
//  */

// const { writeFileSync } = require('fs')

// for (let i = 0 ; i< 10000; i++){
//     writeFileSync('./content/big.txt', `hello ${i}\n`,{flag:'a'})
// }

// createReadStream is a method provided by the 'fs' (file system) module in Node.js.
const {createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt',{ 
    highWaterMark:90000, encoding:'utf-8' 
})

stream.on('data', (result)=>{
    console.log(result)
})
stream.on('err', (err)=>{
    console.log(err)
})


