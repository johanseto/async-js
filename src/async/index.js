const doSomethingAsync = () => {
    return new Promise ((resolve, reject) =>{
    (true)
    ? setTimeout(() => {
        resolve('Do somethin async')
    },2000)
    : reject(new Error('Test Error'))
    })
}


const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something)
}


console.log('before 0')
doSomething()
console.log('After 0')

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)

    } catch(error) {
        console.error(error)
    }
}


console.log('before 1')
anotherFunction()
console.log('After 1')