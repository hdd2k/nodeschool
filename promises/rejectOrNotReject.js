var promise = new Promise((fulfill, reject) => {
    fulfill('I FIRED')
    reject(new Error('I DID NOT FIRE'))
})

var onRejected = (error) => {
    console.log(error.message)
}

promise.then(console.log, onRejected)
