const { readFile } = require('fs')
// async / await
// async function always returns a promise
// await waits till promise is settled
// error handling
// readable version of fs-async with promise 
const getText = (path) =>{
    // create a new promise object
    return new Promise((resolve, reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                // console.log(err)
                reject(err)
                //return
            }else{
                resolve(data)
            }
        })
    })
}
// getText('./content/first.txt')
//     .then(result => console.log(result))    // Log the result if the promise is resolved
//     .catch((err)=>console.log(err))         // Log the error if the promise is rejected
// async is a keyword placed before a function to allow the function to return a promise
const start = async()=>{
    try {
        const first = await getText('./content/first.txt');    
        const second = await getText('./content/second.txt');    
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(err);
    }       
}
start()

/**         but what if I want to add more functions instead of just readFile in the wrapper
 * 
 */