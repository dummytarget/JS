const swapCase = (str) => {
    let swapStr = '';

    for(let value of str){
        if (value==value.toUpperCase()) {
            swapStr += ''+value.toLowerCase();
        } else {
            swapStr += ''+value.toUpperCase();
        }
    }
    return swapStr;
}

let str = 'PaPa ProGraMmeR';
console.log(swapCase(str));