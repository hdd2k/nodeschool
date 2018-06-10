var async = require('async')
var http = require('http')

var [urlOne, urlTwo] = process.argv.slice(2)

async.each(
    process.argv.slice(2),
    (url, done) => {
        http.get(url, (res) => {
            res.on('data', () => {
            })
            res.on('end', () => {
                done(null, null);
            })
        }).on('error', (err) => {
            done(err)
        })
    },
    (err) => {
        if (err) console.log(err)
    }
)
