var port = process.argv[2]
var filePath = process.argv[3]

var fs = require('fs')
var http = require('http')

var server = http.createServer((req, res) => {
    fs.createReadStream(filePath).pipe(res);
});

server.listen(port)
