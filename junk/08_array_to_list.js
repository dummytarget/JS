function arrayToList(arr) {
    let len = arr.length;
    let list = null;

    for (let i = len-1 ; i >= 0; i--) {
        let value = arr[i];
        list = {value : value, rest: list};
    }

    return list; 
}


function listToArray({ value, rest }) {
    return [value, ...(rest ? listToArray(rest) : [])]
}

const nth = ({value, rest}, x) => {
    let arr = [value, ...(rest ? listToArray(rest) : [])];
    return arr[x];
}

// console.log(arrayToList([1,2,3]))
// console.log(listToArray({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }))

console.log(nth(arrayToList([1,2,3]), 1))


