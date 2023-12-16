const express = require('express')
const router = express.Router()           


// for the controller demo import all the controllers,
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('./people')    // destructure from the people.js

            /**  1st way */
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

            /** 2nd way */
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman).post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson)


// module.exports = router  // export router instance as module  // not used in this demo
