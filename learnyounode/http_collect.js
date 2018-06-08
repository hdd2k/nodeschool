var http = require('http')
var url = process.argv[2]

var fullData = ""

http.get(url, function(res) {
    res.on('error', console.error)
    res.on('data', (data) => {
        fullData += data.toString()
    })
    res.on('end', () => {
        console.log(fullData.length)
        console.log(fullData)
    })
})
