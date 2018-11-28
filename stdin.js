process.stdin.resume();
process.stdin.setEncoding('utf8');

// capture the data line is read line by line (hitting enter at the prompt)
process.stdin.on('data', function (chunk) {
    console.log('chunk:', chunk);
});

// end of the stream
process.stdin.on('end', function () {
    console.log('This is the end');
});

