var url = process.argv[2]

var http = require('http')
var async = require('async')

var response = ''
var count = 0

async.whilst(
    () => { return response !== 'meerkat' },
    (done) => {
        count++
        http.get(url, (res) => {
            var body = ''
            res.on('data', (data) => {
                body += data.toString()
            })
            res.on('end', () => {
                response = body
                done(null, count)
            })
        })
    },
    (err, results) => {
        console.log(count)
    }
)
