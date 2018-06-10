function alwaysThrows(){
    throw new Error('OH NOES')
}

function iterate(first) {
    console.log(first)
    return first+1
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((err) => {console.log(err.message)})






