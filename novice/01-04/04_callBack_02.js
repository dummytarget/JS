function calculate(param1,param2,param3){
    result = param1 + param2 + param3

    if (typeof param3 == 'function'){
        result = param3(param1,param2)
    }

    return result
}

a=calculate(2000,4000, function(x,y){return "$ " + (x + y) }) 
b=calculate(7000,2000, function(x,y){return "Rp " + (x * y) }) 
c=calculate(1, 1, 6)
console.log(a) 
console.log(b) 
console.log(c)