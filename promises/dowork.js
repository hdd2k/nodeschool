var http = require('q-io/http')

http.read('http://localhost:7000')
    .then((userId) => {
        return http.read('http://localhost:7001/' + userId)
    })
    .then(JSON.parse)
    .then(console.log)

