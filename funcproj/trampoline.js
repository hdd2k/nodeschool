function repeat(op, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    op()
    return () => {
        repeat(op, --num)
    }
    // if (num <= 0) return
    // op()
    // return repeat(op, --num)
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    fn()
}

module.exports = function(op, num) {
    // You probably want to call your trampoline here!
    var next = repeat(op, num)
    while(next) {
        var next = trampoline(next)
    }
}
