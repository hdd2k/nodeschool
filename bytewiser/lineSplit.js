var fs = require('fs')
var path = process.argv[2]
var newline = '\n'.charCodeAt(0);

fs.readFile(path, function(err, bufData) {
    if (err) throw err;

    var newLinesIdx = [];
    for (var i = 0; i < bufData.length; i++) {
        if (bufData[i] === newline) newLinesIdx.push(i)
    }

    // var newLinesIdx = [-1].concat(newLinesIdx)
    newLinesIdx.unshift(-1)

    for (var i = 0, j = 1; i < newLinesIdx.length; i++, j++) {
        console.log(bufData.slice(newLinesIdx[i]+1, newLinesIdx[j]))
    }
})
