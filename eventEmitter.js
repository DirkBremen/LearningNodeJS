var events = require('events');
var emitter = new events.EventEmitter();

emitter.once('knock', function () {
    console.log('Who\'s there?');
})

emitter.on('knock', function () {
    console.log('Go away');
})

//trigger
emitter.emit('knock');
emitter.emit('knock');