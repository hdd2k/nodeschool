var async = require('async')
var http = require('http')

async.map(
    process.argv.slice(2),
    (url, done) => {
        var body = ''
        http.get(url, (res) => {
            res.on('data', (data) => {
                body += data
            })
            res.on('end', () => {
                done(null, body)
            })
        })
    },
    (err, results) => {
        if (err) return console.log(err)
        console.log(results)
    }
)
