const main = (callBack) => {
    callBack()
}

const myCallback = () => {
    console.log('This is call back')
}

main(myCallback)