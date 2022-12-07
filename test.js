// read a test.txt file and print its content

var fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data.toString());
});

