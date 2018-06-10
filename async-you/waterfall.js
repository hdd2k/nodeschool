var path = process.argv[2]
var fs = require('fs')
var http = require('http')
var async = require('async')



async.waterfall([
    (done) => {
        var url = fs.readFileSync(path).toString()
        done(null, url)
    },
    (url, done) => {
        var body = '';
        http.get(url, (res) => {
            res.on('data', (data) => {
                body += data
            });
            res.on('end', () => {
                done(null, body)
            });
        })
    }
], (err, result) => {
    if (err) console.error(err)
    console.log(result)
})

