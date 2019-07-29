
var express = require('express');
var app = express();

var server=app.listen(6900);

app.use(express.static('host'));

console.log("Server chal raha hain");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	// console.log('new connection '+ socket.id);

	socket.on('mouse',mouseMsg);

	function mouseMsg(data){
		socket.broadcast.emit('mouse',data);
		// console.log(data);
	}
}


// function chan(str) {
// 	for(var i=0;i<str.length;i++){
// 		if(str[i]=="-")
// 			console.log("_");
// 		else
// 			console.log(str[i]);
// 	}
// }