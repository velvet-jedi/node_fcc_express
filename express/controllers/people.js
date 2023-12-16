let { people } = require('../data')

// functions 

    // for the get request 
const getPeople =  (req, res)=>{    
    res.status(200).json({success: true, data:people})
} 

    // for create a person post request
const createPerson = (req, res)=>{    
    const {name} = req.body // 
    if(!name){  
        return res.status(400).json({success: false, msg:'please provide name value'}) // msg property is in frontend being handled
    }
    
    res.status(201).json({success: true, person:name})
}

const createPersonPostman = (req, res)=>{
    const {name} = req.body // 
    if(!name){  
        return res.status(400).json({success: false, msg:'please provide name value'}) // msg property is in frontend being handled
    }
    
    res.status(201).send({success: true, data:[...people, name]})
}

const updatePerson = (req, res)=>{         
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
}

const deletePerson = (req, res)=>{    
    const person = people.find((person)=> person.id === Number(req.params.id))
    if (!person){       // if no match
        return res.status(404).json({success: false, msg: `no person with the id ${req.params.id}`})
    }
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}

// export these controllers 