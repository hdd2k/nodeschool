var http = require('http')
var async = require('async')
var url = process.argv[2]

async.reduce(
    ['one','two','three'],
    0,
    (acc, item, cb) => {
        http.get(url + '/?number=' + item, (res) => {
            res.on('data', (data) => {
                cb(null, acc + Number(data.toString()))
            })
        })
    },
    (err, result) => {
        console.log(result)
    }
)
