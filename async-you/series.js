var async = require('async')
var http = require('http')
var [urlOne, urlTwo] = process.argv.slice(2)

async.series(
    {
        requestOne: (done) => {
            var body = ''
            http.get(urlOne, (res) => {
                res.on('data', (data) => {
                    body += data
                })
                res.on('end', () => {
                    done(null, body)
                })
            })
        },
        requestTwo: (done) => {
            var body = ''
            http.get(urlTwo, (res) => {
                res.on('data', (data) => {
                    body += data
                })
                res.on('end', () => {
                    done(null, body)
                })
            })
        }
    },
    (err, results) => {
        console.log(results)
    }
)
