var [host, port] = process.argv.slice(2)

var http = require('http')
var async = require('async')

async.series(
    {
        post: (done) => {
            async.times(
                5,
                (idx, next) => {
                    var data = JSON.stringify({'user_id': idx+1})
                    var options = {
                        host: host,
                        port: port,
                        path: '/users/create',
                        method: 'POST',
                        headers: {
                            'Content-Length': data.length
                        }
                    }
                    var req = http.request(
                        options,
                        (res) => {
                            res.on('data', (data) => {
                                console.log('data : ' + data)
                            })
                            res.on('end', () => {
                                next(null)
                            })
                        }
                    )
                    req.write(data)
                    req.end()
                },
                (err, result) => {
                    done(null)
                }
            )
        },
        get: (done) => {
            http.get('http://' + host + ':' + port + '/users', (res) => {
                var content = ''
                res.on('data', (data) => {
                    content += data.toString()
                })
                res.on('end', () => {
                    done(null, content)
                })
            })
        }
    },
    (err, result) => {
        if (err) console.log(err)
        console.log(result['get'])
    }
)

