
function all(promOne, promTwo) {
    var counter = 0;
    var arr = []

    return new Promise((fulfill, reject) => {
        var func = (success, idx) => {
            arr[idx] = success
            counter ++
            if (counter === 2) fulfill(arr)
        }

        promOne.then((success) => {
            func(success, 0)
        })
        promTwo.then((success) => {
            func(success, 1)
        })
    });
}

all(getPromise1(), getPromise2())
    .then(console.log)
