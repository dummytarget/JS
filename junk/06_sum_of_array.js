function range(start, stop, step) {
     
    if (start<stop) {
        if (step==null) {
            step = 1;
        }  
        let arr = [];
        
        for (let i = start; i <= stop; i+=step) {
            arr.push(i);
        }
        return arr;

    } else if (start>stop) {
        if (step==null) {
            step = -1;
        }  
        let arr = [];
        
        for (let i = start; i >= stop; i+=step) {
            arr.push(i);
        }
        return arr;
    }
    
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i]
    }
    return sum;
}

console.log(sum(range(1, 100, 5)));

