function reverseArray(arr) {
    let len = arr.length;
    let revArr = [];

    for (let i = len-1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

console.log(reverseArray(["a", "b", "c"]));