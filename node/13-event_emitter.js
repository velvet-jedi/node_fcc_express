const EventEmitter = require('events'); 
/** imports the EventEmitter class from the 'events' module in Node.js
 *  The 'events' module provides an event-driven architecture.
*/
const customEmitter = new EventEmitter() // instance of class EventEmitter to emit events and handle subscriptions

// on() and emit()

/*  subscribing to the 'response' event using the on method. 
    This means that when the 'response' event is emitted, the 
    provided callback function will be executed.
 *  subscribing to an event means: "Hey, let me know when this thing 
 *  happens, and here's what I want to do when it does." 
*/ 

customEmitter.on('response', (name, id)=>{  /** response event - to be triggered*/
    console.log(`data recieved: ${name}:${id}`)
})
customEmitter.on('response', ()=>{  
    console.log(`some other thing to do at the trigger`)
})

// EMIT COMES AFTER ON    |      ORDER MATTERS
customEmitter.emit('response', 'john', 34)

/**
 * Here, you're emitting the 'response' event using the emit method. 
 * This triggers the execution of the callback function you defined earlier, 
 * logging the message "data received.
 */