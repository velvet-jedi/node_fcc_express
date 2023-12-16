// started operating system process
console.log('first')      // immediate code
setTimeout(()=>{                    //offloaded code
    console.log('second')           //offloaded code
}, 0)                               //offloaded code
console.log('third')        // immediate code

// completed and exited operating system process