// GLOBAL variables

// __dirname
// __filename
// require - function to use modules
// module - info about current module   
// process - info about env where the program executes
console.log(__dirname)
console.log(__filename)
// console.log(process)
const amount = 3

if(amount < 10){
    console.log('small number')
}
else{
    console.log('large number')
}

/* setTimeout(() => {
    
}, timeout); */
setInterval(() => {
    console.log('Hey its my first node app')    
}, 1000);
