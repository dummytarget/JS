const fs = require('fs');

var data = fs.readFileSync('package-lock.json')

console.log('Read File Done :' + data.toString());