var http = require('q-io/http')
var url = "http://localhost:1337"

http.read(url)
    .then(JSON.parse)
    .then(console.log)
