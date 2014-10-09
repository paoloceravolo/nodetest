var fs = require('fs');

var arg = process.argv;

var buf = fs.readFileSync(arg[2]);

var str = buf.toString();

	console.log(buf.length);
	// to test asynchronous behavior
	//setTimeout(function(){console.log(buf.length)}, 5000);
