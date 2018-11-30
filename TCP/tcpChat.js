var net = require('net');
var sockets = [];

var tcpServer = net.createServer();
tcpServer.on('connection', function (socket) {
    console.log('Connection established');
    socket.setEncoding('utf8');
    sockets.push(socket);
    socket.on('data', function (data) {
        console.log(data);
        var numClients = sockets.length;
        //do a broadcast to all connected clients
        for (var i = 0; i < numClients; i++) {
            //don't send it back to itself
            if (sockets[i] === socket) {
                continue;
            }
            sockets[i].write(data);
        }
    });

    socket.on('end', function(){
        sockets.splice(sockets.indexOf(socket),1);
    });
});

tcpServer.listen(4500);