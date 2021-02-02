const maximum = function(x,y) {
    if (x<=y) {
        return y; 
    } else {
        return x;
    }
    
}

const minimum = (x,y) =>{
    if (x>=y) {
        return y; 
    } else {
        return x;
    }
    
}

console.log(maximum(1,-10));