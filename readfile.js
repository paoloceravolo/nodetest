const fs = require('fs');

var arg = process.argv;

var buf = fs.readFile(arg[2]);

//var str = buf.toString();

console.log(buf.length); 

console.log("la lunghezza del file è:");