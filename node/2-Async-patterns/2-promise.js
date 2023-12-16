const { readFile } = require('fs')

/**     imagine being in a restaurant and you done with your payment for an order and 
 *      you get a receipt which says you will get the order once prepared (resolve)
 *      or a refund (reject)
 *         THE RECEIPT IS A PROMISE
 * 
 *      you post a HTTP request, and you IN TIME get the response (resolve) when the server responds
 *      or an error (reject)
 *      
 *          PENDING, REJECTED, FULFILLED
 */

// readable version of fs-async with promise 
const getText = (path) =>{
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

getText('./content/first.txt')
    .then(result => console.log(result))    // Log the result if the promise is resolved
    .catch((err)=>console.log(err))         // Log the error if the promise is rejected

/**     the whole purpose of promises is to avoid the callback hell
 *  https://www.youtube.com/watch?v=IBjmTlShf6U
 * 
 * 
 *                  still a PAIN
 *  if we want to read 2 files and then write to a third
 *  asynchronously with the promise its still a redundant pain
 */