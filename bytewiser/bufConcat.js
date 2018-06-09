var total = []

process.stdin.on('data', function(chunk) {
    total.push(chunk)
})

process.stdin.on('end', function() {
    console.log(Buffer.concat(total))
})

