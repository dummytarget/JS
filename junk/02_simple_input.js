const readline = require( 'readline' ).createInterface({ 
    input: process.stdin, output: process.stdout 
})

readline.question( 'Name? ', name=> { 
    console.log(`Hi ${name}`) //string
    readline.close()
})