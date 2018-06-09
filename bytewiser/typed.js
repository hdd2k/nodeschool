process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        var typed = new Uint8Array(chunk)
        console.log(JSON.stringify(typed))
    }
});
