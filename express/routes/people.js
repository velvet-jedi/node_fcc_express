// for router demo
// we grouped all the /api/people routes here

const express = require('express')
// const app = express() instead of setting up the app we go with router from express 
                        // ie a router instance which takes care of routing isntead of the express app
const router = express.Router()           

let { people } = require('../data')




// router.get('/api/people',(req, res)=>{
router.get('/',(req, res)=>{    
    res.status(200).json({success: true, data:people})
})

// router.post('/api/people',(req, res)=>{
router.post('/',(req, res)=>{    
    const {name} = req.body // 
    if(!name){  
        return res.status(400).json({success: false, msg:'please provide name value'}) // msg property is in frontend being handled
    }
    
    res.status(201).json({success: true, person:name})
})

// router.post('/api/people/postman',(req, res)=>{
router.post('/postman',(req, res)=>{
    const {name} = req.body // 
    if(!name){  
        return res.status(400).json({success: false, msg:'please provide name value'}) // msg property is in frontend being handled
    }
    
    res.status(201).send({success: true, data:[...people, name]})
})


// router.put('/api/people/:id',(req, res)=>{     
router.put('/:id',(req, res)=>{         
    const { id } = req.params        
    const { name } = req.body
    const person = people.find((person)=>person.id === Number(id))

    if(!person){  
        return res.status(404).json({success: false, msg:`No user matching this id ${id}`}) // msg property is in frontend being handled
    }
    
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name   
        }
        return person 
    })
    res.status(200).json({success: true, data: newPeople})
})

// app.delete was similarly for every route it was
// router.delete('/api/people/:id',(req, res)=>{
router.delete('/:id',(req, res)=>{    
    const person = people.find((person)=> person.id === Number(req.params.id))
    if (!person){       // if no match
        return res.status(404).json({success: false, msg: `no person with the id ${req.params.id}`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
})

module.exports = router  // export router instance as module

// our people.js is stilla mess
// can we split the functions to separate files?
    // come in controller