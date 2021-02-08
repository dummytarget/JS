const result = () => {
    var var1 = parseInt(document.getElementById("var1").value);
    var var2 = parseInt(document.getElementById("var2").value);

    var result = 0;
    var aritmatika = parseInt(document.getElementById("aritmatika").value);
    switch (aritmatika) {
        case 0:
            result = 'Pilih Operasi'
            break;
        case 1:
            result = var1+var2;
            break;
        case 2:
            result = var1-var2;
            break;
        case 3: 
            result = var1*var2;
            break;
        case 4: 
            if(var2==0){
                result = 'Undivided';
            } else {
                result = var1/var2;
            }
    }
    

    document.getElementById("result").innerHTML = result;
}
