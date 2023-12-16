const express = require('express') // from npm
const app = express()

let { people } = require('./data') // might want to modify or reassign people so let

// static assets
app.use(express.static('./methods-public'))

// parse the form data and add it to req.body
app.use(express.urlencoded({ extended: false }))
// reading from a DB (used module data as demo here)
app.get('/api/people',(req, res)=>{
    res.status(200).json({success: true, data:people})
})

// add data/ insert data with post
    // /login form post method
app.post('/login',(req, res)=>{   // TIP: If the frontend is separate from the server you will have to provide the full domain path
    const { name } = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    return res.status(401).send("Please provide a username")
    // console.log(req.body)
    //res.send('POST')

})
// still we can't add a new username to the people array
// thats where the middleware comes in ... middlware does the processing between the request and the response at line 9


// parse json (handle incoming json data )
app.use(express.json())
// for javascript form submission
app.post('/api/people',(req, res)=>{
    const {name} = req.body // 
    if(!name){  // if name not provided
        return res.status(400).json({success: false, msg:'please provide name value'}) // msg property is in frontend being handled
    }
    //res.status(201).send('Success')
    res.status(201).json({success: true, person:name})
})

app.put('/api/people/:id',(req, res)=>{     // for updating a value in the people array you can think like this
    const { id } = req.params       // used for postman testing demo 
    const { name } = req.body
    //console.log(id, name)
    //res.send('hello')
    const person = people.find((person)=>person.id === Number(id))

    if(!person){  // if name not provided
        return res.status(404).json({success: false, msg:`No user matching this id ${id}`}) // msg property is in frontend being handled
    }

    // change the name of the id submitted by user
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name   // from the req body
        }
        return person 
    })
    res.status(200).json({success: true, data: newPeople})
})

// remove that person from the array
app.delete('/api/people/:id',(req, res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if (!person){       // if no match
        return res.status(404).json({success: false, msg: `no person with the id ${req.params.id}`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})
