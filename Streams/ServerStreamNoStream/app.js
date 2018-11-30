var express = require('express');
var fs = require('fs');
var path = require('path');
var port = 3000;
var app = express();
var responseTime = require('response-time');
var largeImagePath = path.join(__dirname, 'CapitalOne_Digital_Skills_Infographic_BW.jpg');


//compare response times when using stream or no stream file handling
// run the app and check the chrome network tab/header/x-response-time comparing localhost:3000/stream to non-stream

app.use(responseTime());

app.get('/non-stream', function (req, res) {
    var file = fs.readFile(largeImagePath, function (error, data) {
        res.end(data);
    })
});

app.get('/non-stream2', function (res, req) {
    var file = fs.readFileSync(largeImagePath);
    res.end(file);
});

app.get('/stream', function (res, req) {
    var stream = fs.createReadStream(largeImagePath);
    stream.pipe(res);
});

app.get('/stream2', function (req, res) {
    var stream = fs.createReadStream(largeImagePath);
    stream.on('data', function (data) {
        res.write(data);
    })
    stream.on('end', function () {
        res.end();
    })
})

app.listen(port);

