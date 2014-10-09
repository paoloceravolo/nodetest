//The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.
var arr = process.argv;
//arr.forEach(function(value){console.log(value)});

var r = 0;

for (i=2; i<arr.length; i++){
	r += Number(arr[i]);	
	}
	console.log(r);