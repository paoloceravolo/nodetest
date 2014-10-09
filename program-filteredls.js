var fs = require('fs');

var arg = process.argv;

// you can put 'utf8' as the second argument and put the callback as the third argument 
// and you will get a String instead of a Buffer.


fs.readdir(arg[2], function(err, files){
	if (err) throw err;
	files.forEach(function(element){if(element.indexOf("js") > -1){console.log(element)}});
	
	// to test
	//setTimeout(function(){console.log(data.length)}, 5000);
	});
