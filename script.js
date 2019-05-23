var id = process.pid;
var arr = process.argv;

var r = 0;

for (i=2; i<arr.length; i++){
	r += Number(arr[i]);
}

console.log("Processo in esecuzione "+id);
//console.log("La somma è " + r);
process.stdout.write("La somma è " + r + "\n");
process.stdout.end("Stream is end \n");
process.emitWarning("È successo qualcosa a "+id, 
	{
		code: 'WARNING1',
		detail: "Processo in esecuzione "+id
	});