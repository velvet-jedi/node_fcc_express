// middleware function
const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url , time)
    //res.send('Testing')
    // pass the control to next function (which in our case would be another get route function)
    next()
}   

module.exports = logger
