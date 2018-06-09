// '.' (46) -> '!'
process.stdin.on('data', function(chunk) {
    var newChunk = chunk.toString('utf8').replace(/\./g,'!')
    console.log(Buffer.from(newChunk))
})
