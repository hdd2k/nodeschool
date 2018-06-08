module.exports = function repeat(func, num) {
    if (num == 0) {
        return;
    }
    func();
    repeat(func, num-1)
}
