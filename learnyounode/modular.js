var func = require('./modular_module.js')

var dir = process.argv[2]
var ext = process.argv[3]

func(dir, ext, function(err, filtered) {
    if (err) throw err
    filtered.forEach(item => console.log(item))
})
