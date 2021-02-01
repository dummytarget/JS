function range(x,y,z) {
     

    if (x<y) {
        if (z==null) {
            z = 1;
        }  
        let arr = [];
        
        for (let i = x; i <= y; i+=z) {
            arr.push(i);
        }
        return arr;

    } else if (x>y) {
        if (z==null) {
            z = -1;
        }  
        let arr = [];
        
        for (let i = x; i >= y; i+=z) {
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

