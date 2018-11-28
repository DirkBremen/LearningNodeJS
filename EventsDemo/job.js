var util = require('util');
var events = require('events');
var Job = function Job() {
    var job = this;
    job.process = function () {
        setTimeout(() => {
            // Emulate the delay of the job - async
            // use the inheretid emit functionality from events to trigger an event
            job.emit('done', { completedOn: new Date() });
        }, 700);
    }
    // listen to start event
    job.on('start', function () {
        job.process();
    })
}
//eject eventEmitter into Job class
util.inherits(Job, events.EventEmitter);
module.exports = Job;