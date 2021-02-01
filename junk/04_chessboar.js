function chessboar(len) {
    
    for(var i=1;i<=len;i++){

        var s ="";

        for(var j=1;j<=(len/2);j++){

          if(i%2==0){
              s+="# ";
          } else {
              s+=" #";    
          }

        }

        console.log(s);

    }
}

chessboar(8);