module.exports = function duckCount() {
    var argsArr = Array.prototype.slice.call(arguments, 0, arguments.length)
    return argsArr.reduce((acc, item) => {
        return acc + (Object.prototype.hasOwnProperty.call(item, 'quack') ? 1 : 0)
    }, 0)
}
