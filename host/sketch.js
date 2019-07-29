var socket;


function setup(){
	createCanvas(1350,600);
	background(51);

	socket = io.connect('http://localhost:6900');

	socket.on('mouse',newDrawing);
}

function newDrawing(data){
	noStroke();
	fill(255,0,100);
	ellipse(data.x,data.y,10,10);
}

function mouseDragged() {
	// console.log('sending '+mouseX+' '+mouseY);

	var data={
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse',data);

	noStroke();
	fill(255);
	ellipse(mouseX,mouseY,10,10);
}

// function draw(){
	
// }