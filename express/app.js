const express = require('express') // from npm
const app = express()

// let { people } = require('./data') // moved to people.js
const people = require('./routes/people') // set up the people router, imported from people.js

const auth = require('./routes/auth')  // set up the auth router, imported from auth.js

// static assets
app.use(express.static('./methods-public'))
// parse the form data and add it to req.body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/people', people) // router middleware from people.js only for this path and its subpaths ; BASE PATH

app.use('/login', auth) // router middleware from auth.s for for path /login 

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})
