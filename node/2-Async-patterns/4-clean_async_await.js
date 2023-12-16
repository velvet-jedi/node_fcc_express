const { readFile, writeFile } = require('fs').promises
/**     Without destructuring, you would typically do something like this:     
        const fs = require('fs');
        const readFile = fs.readFile;
 */

        // With the introduction of the promises API in Node.js,
        // the fs.promises object provides versions of file system functions (such
        // as readFile and writeFile) that return promises, making it 
        // easier to work with asynchronous code using async/await or promise chaining.

        // We added the .promises to the fs module

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async()=>{
    try {
        // const first = await readFilePromise('./content/first.txt', 'utf-8');    
        // const second = await readFilePromise('./content/second.txt', 'utf-8');    
        const first = await readFile('./content/first.txt', 'utf-8');    
        const second = await readFile('./content/second.txt', 'utf-8');    
        // await writeFilePromise('./content/result-mind-grenade.txt',`This is a result of node's native option of async patterns with util module applied on ${first} and ${second}`)
        await writeFile('./content/result-mind-grenade.txt',`This is a result of node's native option of async patterns with util module applied on ${first} and ${second}`)
        console.log(first,second);
    } catch (error) {
        console.log(err);
    }       
}
start()

