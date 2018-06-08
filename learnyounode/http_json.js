var http = require('http')
var url = require('url')
var port = process.argv[2]

var server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let parsed = url.parse(req.url, true)
        let d = new Date(parsed.query.iso);

        if (parsed.pathname === '/api/parsetime') {
            let dateJson = {
                'hour': d.getHours(),
                'minute': d.getMinutes(),
                'second': d.getSeconds(),
            }
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify(dateJson))
        } else if (parsed.pathname === '/api/unixtime') {
            let unixJson = {
                'unixtime': d.getTime()
            }
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify(unixJson))
        }
    }
})


server.listen(port)
