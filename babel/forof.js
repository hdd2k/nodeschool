const max = process.argv[2]

let fizzBuzz = {
    [Symbol.iterator]() {
        //
        let curr = 0;
        return {
            next() {
                curr ++
                if (curr <= max) {
                    if (curr % 15 === 0) return { done: false, value: 'FizzBuzz' }
                    else if (curr % 3 === 0) return { done: false, value: 'Fizz' }
                    else if (curr % 5 === 0) return { done: false, value: 'Buzz' }
                    else return { done: false, value: curr }
                }
                return { done: true }
            }
        }
    }
}

for (var i of fizzBuzz) {
    console.log(i)
}
