var promise = Promise.resolve('SECRET VALUE');
promise.then(console.log)

var promise = Promise.reject('SECRET VALUE');
promise.catch(console.log)


