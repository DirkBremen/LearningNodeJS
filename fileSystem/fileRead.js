var fs = require('fs');
fs.readFile('./test.txt', { encoding: 'utf8' }, function (error, data) {
    console.log(data);
});

console.log('Before read:')



