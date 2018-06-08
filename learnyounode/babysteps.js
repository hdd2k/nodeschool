let args = process.argv.slice(2)
let reducer = (acc, curr) => parseInt(acc) + parseInt(curr)
console.log(args.reduce(reducer))
