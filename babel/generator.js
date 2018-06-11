var max = process.argv[2]

let fizzBuzz = function*(){
    let curr = 0;
    while (curr < max) {
        curr ++;
        if ((curr % 3 === 0) && (curr % 5 === 0)) {
            yield 'FizzBuzz'
        } else if (curr % 3 === 0) {
            yield 'Fizz'
        } else if (curr % 5 === 0) {
            yield 'Buzz'
        } else {
            yield curr
        }
    }
}()

for (var n of fizzBuzz) {
    console.log(n)
}
