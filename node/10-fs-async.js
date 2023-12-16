// asynchronous or non blocking 
/**
 
 */

const { readFile, writeFile } = require('fs')

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
        (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task')
        }
    )
    })
})
console.log('starting with the next task')
// callback runs when some event happens

/* ----------------------WHY SYNCRONOUS IS BETTER ?---------------

        the moment we start a task we offload that task 
        and we continue with the rest of the code or the next task
 * 
 *              BUT BUT BUT
 *                          messy callback hell
 *  https://www.youtube.com/watch?v=bx9xYPt2tdc
 */
