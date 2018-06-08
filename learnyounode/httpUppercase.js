var port = process.argv[2];
var http = require('http');

var map = require('through2-map')

var server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(map((data) => {
            return data.toString().toUpperCase();
        })).pipe(res)
    }
})

server.listen(port)
