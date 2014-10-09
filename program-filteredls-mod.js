var loaddir = require('./module-filteredls');

// caputure the arguments provided by the process (i.e. the console)

var arg = process.argv;

// call a method made available by the module loaddir

loaddir.loadandfilter(arg[2], arg[3]);

//console.log(loaddir.loadandfilter);