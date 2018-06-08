var http = require('http');
// var bl = require('bl')

var [url1,url2,url3] = process.argv.slice(2,4);
var results = ['','','']
var count = 0

function httpGet(i) {
    http.get(process.argv[2+i], (res) => {
        res.on('error', console.error);
        res.on('data', (data) => {
            results[i] += data.toString()
        });
        res.on('end', () => {
            count ++;
            if (count === 3) {
                results.forEach(item => console.log(item))
            }
        });
    });
}

for (var i = 0; i < 3; i++)
    httpGet(i)


