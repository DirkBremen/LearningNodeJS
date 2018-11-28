const http = require('http');
// the server will log post requests to its url to the console
var server = http.createServer((req, res) => {
    req.setEncoding('utf8');
    req.on('data', (chunk) => {
        console.log(chunk);
    })
    req.on('end', () => {
        res.end();
    })
});

server.listen(1337);


