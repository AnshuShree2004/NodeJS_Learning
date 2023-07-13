// importing  event module
const { Console } = require('console');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

//registering errors
eventEmitter.on('error',(err) =>{
    console.log('whoops! there was an error');
})

//registering to new listener
eventEmitter.on('new listener',(event,listener) =>{
    console.log(`the listener is added to ${event}`);
})

//registering to remove listener
eventEmitter.on('remove listener',(event,listener) =>{
    console.log(`the listener is removed to ${event}`);
})


let fun1 = (msg) =>{
    console.log('Message from fun1 : ',msg)
}

let fun2 = (msg) =>{
    console.log('Message from fun2 : ',msg)
}


eventEmitter.on('myEvent',fun1)
eventEmitter.on('myEvent',fun2)

// removing listener
eventEmitter.off('myEvent',fun1)

// fire myEvent
//eventEmitter.emit('myEvent','Event happened')

// fire error
//eventEmitter.emit('error',new Error('whoops!'))

//async function
eventEmitter.on('myEvent',(msg)=>{
    setImmediate(()=>{
        console.log('Message from async'+msg)
    })
})

let fun =(msg) => {
    console.log('Message from fun: '+msg)
}

eventEmitter.on('myEvent',fun)
//eventEmitter.emit('myEvent','Event happened')

eventEmitter.on('myEvent',(msg)=>{
    process.nextTick(()=>{
        console.log('Message from async : '+msg)
    })
})


eventEmitter.on('myEvent',fun)
eventEmitter.emit('myEvent','Event happened')