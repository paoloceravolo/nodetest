const fs = require('fs');

var arg = process.argv;

fs.readFile(arg[2], function(err, data){
	var str = data.toString();
	console.log(str.length); 
});

console.log("la lunghezza del file è:");