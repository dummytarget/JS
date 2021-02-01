function reverseStr(str) {
    
    var len = str.length;
    var s = "";

    for (let index = len; index >= 0; index--) {
        s += "" + str.charAt(index);
    }

    console.log(s);
    
}

reverseStr("reversed");

