// modules
// each file in a node environment is a module
const names = require('./2-names.js')
console.log(names)

const hi = require('./3-hifunc')

require('./5-sum')
const person = require('./4-alt-exp.js')
//console.log(person)

hi('pranjal')
//hi(john)
hi(names.john)
hi(names.ranjana)

