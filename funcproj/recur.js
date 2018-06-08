module.exports = function reduce(arr, fn, init) {
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value
        return reduceOne(index + 1, fn(value, arr[index], index, arr))
    })(0, init)
}

// module.exports = function reduce(arr, fn, init) {
//     if (arr.length === 0) return init
//     return reduce(arr.slice(1), fn, fn(init, arr[0]))
// }
