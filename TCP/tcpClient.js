var net = require('net');
var socketUtil = require('./socketUtil');
var socket = net.connect({ port: 5000 }, function () {
    //once connection has been established write back to server
    socket.write('Hello from the client');
    socketUtil.socketAddress(socket);
});
socket.setEncoding('utf8');
socket.on('data', function (data) {
    console.log('I received from server:', data);
    socketUtil.socketStats(socket);
    //socket.destroy();
});

setInterval(function () {
    socket.write('Let\'s talk');
}, 5000);

socket.on('close', function () {
    console.log('Close event on client end.')
});