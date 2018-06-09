module.exports = function Spy(target, method) {
    var origFunc = target[method]
    var counter = {count:0}
    target[method] = () => {
        counter.count ++
        origFunc.apply(null, arguments)
    }
    return counter
}
