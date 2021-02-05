const countChar = (char) => {
    let obj = new Map();


    for(let i of char){
        let temp = 0;
        for(let j of char){
            
            if (i==j) {
                temp++;
                
            }
            
            obj.set(i, temp);
        }
    }
    let sorted = Array.from(obj.entries()).sort(); //sort map, turn it into array first

    return Object.fromEntries(sorted); // make obj from array

}


let char = 'the quick brown fox jumps over the lazy dog';
console.log(countChar(char));
