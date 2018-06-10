var json = process.argv[2]

function parsePromised() {
    var promise = new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(json))
        } catch (e) {
            reject(e.message)
        }
    });
    return promise
}

parsePromised().
    then(null, console.log)


