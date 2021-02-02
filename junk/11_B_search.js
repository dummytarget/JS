const countChar = function(str, find = "B") {
    let len = str.length;

    var count = 0;

    for (let i = 0; i <= len-1; i++) {
        str.charAt(i) == find ? count+=1 : count+=0;
    }
    
    return count;
}

console.log(countChar("kakkerlak", "k"));