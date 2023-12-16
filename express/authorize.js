// middleware function
const authorize = (req, res, next)=>{
    const {user} = req.query; // user query parameter
    if(user === 'john'){ // if it is equal to 'john'
        req.user = {name: 'john', id: 3}    // adding a user property with objects An object is a collection of properties, and a property is an association between a name (or key) and a value
        // normally in real life we can check for JWT
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }

    // console.log('authorize')    
    // next()
}

module.exports = authorize