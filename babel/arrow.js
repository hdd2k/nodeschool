var inputs = process.argv.slice(2);

var result = inputs.map((word) => { return word.substring(0,1) })
    .reduce((acc, item) => { return acc + item })


console.log(result)
