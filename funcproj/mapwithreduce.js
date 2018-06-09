module.exports = function map(input, op, thisArg) {
    // Map using Array#Reduce
    return input.reduce((acc, curr, index, arr) => {
        acc.push(op.call(thisArg, curr, index, arr))
        return acc
    }, [])
}
