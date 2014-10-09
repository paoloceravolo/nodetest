var fs = require('fs');

var arg = process.argv;

// you can put 'utf8' as the second argument and put the callback as the third argument 
// and you will get a String instead of a Buffer.


fs.readFile(arg[2], 'utf8', function(err, data){
	if (err) throw err;
	console.log(data.length);
	// to test asynchronous behavior
	//setTimeout(function(){console.log(data.length)}, 5000);
	});
