const aclean = (arr) =>{
    let obj = new Map();

    for(value of arr){
        let sorted = value.toLowerCase().split("").sort().join("");
        obj.set(sorted, value);
        console.log(sorted, value);
    }

    return Array.from(obj.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));