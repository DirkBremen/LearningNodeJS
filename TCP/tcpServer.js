var net = require('net');
var socketUtil = require('./socketUtil');

//instead of callback to createServer this can be also passed as a callback to tcpServer.on('connection', callback)
var tcpServer = net.createServer(function (socket) {
    console.log('connection has been established...');
    socketUtil.socketAddress(socket);
    tcpServer.getConnections(function (error, count) {
        console.log('Number of established connections is:', count);
    });
    socket.on('end', function () {
        socketUtil.socketStats(socket);
        console.log('server disconnected');
    });
    socket.on('data', function (data) {
        console.log('data received from the tcp client');
        //write something back to the client side
        socket.write('\r\n' + 'Server reply: ' + data + '\r\n');
        //get byte stats per data send (cumulative)
        //socketUtil.socketStats(socket);
        //trigger custom event
        //socket.emit('error', new Error('My Error!'));
    });
    //handle custom event
    socket.on('error', function (error) {
        console.log('Something went wrong!!', error.message);
        //close socket sends fin packet
        //socket.end('Socket is ending...' + '\r\n');
        //cannot be recovered
        socket.destroy();
    });
    //instead of the callback one can also use socket.on('timeout', callback)
    socket.setTimeout(3000, function () {
        socket.end('Disconnection after 3 seconds of idle time.')
    })
});

tcpServer.maxConnections = 3;

//close server for new connections after 10 seconds
// setTimeout(function () {
//     tcpServer.close(function () {
//         //this will only run after all connections to the server are disconnected/closed
//         console.log('Server closed');
//     }, 10000)
// })

tcpServer.on('close', function () {
    console.log('Sever is closing');
})

//first argument can be fixed port number, too
tcpServer.listen(5000, function () {
    var port = tcpServer.address().port;
    console.log('Server is listening at port ' + port + ': Use "telnet localhost ' + port + '" to connect');
});