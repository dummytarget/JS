function arrayToList(arr) {
    let len = arr.length;
    let list = null;

    for (let i = len-1 ; i >= 0; i--) {
        let value = arr[i];
        list = {value : value, rest: list};
    }

    return list; 
}


function listToArray(list) {
    let arr = [];
    arr.push(list.value);
    arr.push(list.rest.value);
    arr.push(list.rest.rest.value);


    return arr;

}


console.log(arrayToList([10,20,30]));

// console.log(listToArray({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }))