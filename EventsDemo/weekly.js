var Job = require('./job.js');
var job = new Job();
// subscribe to the event
job.on('done', function (data) {
    console.log('Job was completed at:', data.completedOn);
    //job.removeAllListeners();
});

//job.process();
// trigger a start event on the job object which is obsevered in the main module job.js
// which calls job.process
job.emit('start');