function triangle(len){
    var s = "";

    for(var i = 1; i <= len; i += 1) {
    for(var j=i; j<=i;j++){
            s +="#";
    }
    console.log(s);
    } 
}

triangle(7)