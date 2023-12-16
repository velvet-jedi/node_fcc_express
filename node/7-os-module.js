const os = require('os')

// info aabout current user
// console.log(os.userInfo())

// system uptime
// console.log(os.uptime())

const currOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currOS)
