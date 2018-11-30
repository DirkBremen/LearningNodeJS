function socketAddress(socket) {
    console.log('Remote port: ', socket.remotePort);
    console.log('Remote address: ', socket.remoteAddress);
    console.log('Local port: ', socket.localPort);
    console.log('Local address: ', socket.localAddress);
}

function socketStats(socket) {
    console.log('Bytes read: ', socket.bytesRead);
    console.log('Bytes written: ', socket.bytesWritten);
}

module.exports.socketAddress = socketAddress;
module.exports.socketStats = socketStats;