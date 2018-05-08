// 1
/* const EventEmitter = require('events')

class CustomEvent extends EventEmitter {} // ?这行的意义是什么

// const ce = new EventEmitter()
const ce = new CustomEvent()


ce.on('test', _ => {
    console.log(_)
    console.log('this is test')
})

setInterval(_ => {
    ce.emit('test')
}, 1000) */

// 2
const EventEmitter2 = require('events')

class CustomEvent2 extends EventEmitter2 {}

const ce2 = new CustomEvent2()

ce2.on('error', (a,b,c,d) => {
    // console.log(arguments)
    console.log(a)
    console.log(b)
    
    console.log('this is error')
})

ce2.emit('error',new Error('woshierror'), Date.now())

// 3
// emitter.once(eventName, listener)

// 4
// emitter.removeListener(eventName, listener)
