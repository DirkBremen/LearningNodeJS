var fs = require('fs');
var net = require('net');

var tcpServer = net.createServer();
tcpServer.on('connection', function (socket) {
    console.log('Connection has been established');
    socket.on('data', function (data) {
        fs.appendFile('data.txt', data.toString('utf8'), function (error) {
            console.log('Data has been written into file.');
        });
    });
});

tcpServer.listen(4500, function () {
    var port = tcpServer.address().port;
    console.log('Server is listening at port ' + port + ': Use "telnet localhost ' + port + '" to connect');
});
