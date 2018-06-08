var fs = require('fs');
var ext = process.argv[3]

fs.readdir(process.argv[2], function(err, list) {
    if(err) throw err

    var filtered = list.filter(fileName => fileName.includes('.' + ext))
    filtered.forEach(item => console.log(item))
});
