const fs = require('fs');

function readFileCallback(err,data){

    if (err){
      console.log('Error Read File :' + err);
    }else{
      console.log(data.toString())
    }

  }

var data = fs.readFile('package-lock.json',readFileCallback)