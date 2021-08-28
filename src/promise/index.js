const sometimeWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey we did it')
        } else {
            reject('Whooops!')
        }
    })
}

sometimeWillHappen()
    .then(response => console.log(response))
    .then(console.log("managing 0"))
    .catch(err => console.err(err))

const  sometimeWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout ( () => {
            resolve('hey we did it for 2')
        }, 2000)
        } else {
            const error = new Error('Whooops!')
            reject (error)
        }
    })
}

sometimeWillHappen2()
    .then(response => console.log(response))
    .then(console.log('managing..'))
    .then(console.log("managing2"))
    .catch(err => console.err(err))

// all prommises logic

console.log("first")

console.log("end")

Promise.all([sometimeWillHappen(),sometimeWillHappen2()])
    .then(response => {
        console.log('ARray or results',response)
    })
    .catch(err => {
        console.error(err)
    })