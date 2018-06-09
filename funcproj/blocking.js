function repeat(op, num) {
    // modify this so it can be interrupted
    if (num <= 0) return

    op()

    // Timeout to allow interruption for next iteration
    setTimeout(function() {
        repeat(op, --num)
    })
}


module.exports = repeat
