const prepend = (x,y) => {
    let value = x;
    let rest = y;

    let obj = {value : value, rest : rest};
    return obj;
}

console.log(prepend(10, prepend(20, prepend(30, null))));