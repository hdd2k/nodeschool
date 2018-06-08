var fs = require('fs')
var path = require('path')

module.exports = function filteredls(dir, ext, cb) {
    fs.readdir(dir, function(err, files) {
        if (err) {
            cb(err)
        }
        else {
            var filtered = files.filter(filename => (path.extname(filename) === ('.' + ext)));
            cb(null, filtered);
        }
    });
}
