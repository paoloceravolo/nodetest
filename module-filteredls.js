var fs = require('fs');

//

exports.loadandfilter = function(dir, ext){

fs.readdir(dir, function(err, files){
	if (err) throw err;
	files.forEach(function(element){filter(element, ext)});
	

	});

}

function filter(element, ext){
if(element.indexOf(ext) > -1){console.log(element)}
}