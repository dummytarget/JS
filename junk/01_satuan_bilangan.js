function satuanBilangan(bilangan) {
    
    var str = bilangan.toString(); //int to str
    var len = str.length; //declare length of the str

    for (let index = 0; index < str.length; index++) {
        var s = "";

        var satuan = str.charAt(index);

        if (satuan == 0) {

            len--;

        } else {

            s+=""+satuan

            for (let j = len-1; j > 0; j--) {
                s+="0"

            }

            len--;
            console.log(s);

        }

    }
}

satuanBilangan(21);