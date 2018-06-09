var i = process.argv[2]

var x = new Uint32Array([i])
var y = new Uint16Array(x.buffer)
console.log(JSON.stringify(y))





