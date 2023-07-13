// importing  event module
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

//registering events
eventEmitter.on('event',() =>{
    console.log('this event is ready to fired now');
})

// firing event using eventEmitter.emit()
//eventEmitter.emit('event');

// removing listener
let fun1 = (msg) =>{
    console.log('Message from fun1 : ',msg)
}

let fun2 = (msg) =>{
    console.log('Message from fun2 : ',msg)
}

eventEmitter.on('myEvent',fun1)
eventEmitter.on('myEvent',fun1)
eventEmitter.on('myEvent',fun2)

eventEmitter.removeListener('myEvent',fun1)

//eventEmitter.emit('myEvent','Event occured')

eventEmitter.removeAllListeners('myEvent')
//eventEmitter.emit('myEvent','Event happened')


//set maxmium listener and get max listener

let eventEmitter1 = new EventEmitter()
let eventEmitter2 = new EventEmitter()

// getting max listener
//console.log('Default max listener for eventlistener1 is : ',eventEmitter1.getMaxListeners())//10
//console.log('Default max listener for eventlistener2 is : ',eventEmitter2.getMaxListeners())//10

//set max listener globally
EventEmitter.defaultMaxListeners = 3;

// getting max listener
//console.log('Default max listener for eventlistener1 is : ',eventEmitter1.getMaxListeners()) //3
//console.log('Default max listener for eventlistener2 is : ',eventEmitter2.getMaxListeners()) //3


eventEmitter1.setMaxListeners(5);
//console.log('Default max listener for eventlistener1 is : ',eventEmitter1.getMaxListeners()) ///5
//console.log('Default max listener for eventlistener2 is : ',eventEmitter2.getMaxListeners()) //3

//listening to myEvent1 with 3 instance of fun1
for (let index = 0; index < 3; index++) {
    eventEmitter1.addListener('myEvent1',fun1)
}


//listening to myEvent1 with 3 instance of fun2
for (let index = 0; index < 3; index++) {
    eventEmitter1.addListener('myEvent2',fun2)
}

//emiing myEvent1 and myEvent2
//eventEmitter1.emit('myEvent1','Event1 occured')
//eventEmitter1.emit('myEvent2','Event2 occured')

// // listening to myEvent with fun1 and fun2
eventEmitter.addListener('myEvent',fun1)

// fun2 will be inserted in front of listeners array

eventEmitter.prependListener('myEvent',fun2)

//  listing listening 
//console.log(eventEmitter.listeners('myEvent'))//[ [Function: fun2], [Function: fun1] ]

// countthe listeners registered to myEvent
//console.log(eventEmitter.listenerCount('myEvent'))//2

// trigerred myEvent
//eventEmitter.emit('myEvent','Event occurred')


