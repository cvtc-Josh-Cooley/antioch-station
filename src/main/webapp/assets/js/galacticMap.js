// get canvas related references
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

// drag related variables
var dragok = false;
var startX;
var startY;

// lore related variables
var systems = [];
var namePlate ;

// zoom variables
var currentScale = 1;
var minScale = 1;
var maxScale = 3;

// listen for canvas mouse events
canvas.onmousemove = myMove;


function loadSystems() {

	var lines = dreadnoughtFile.split("\n");

	for(var line = 0; line < lines.length; line++) {

		var values = lines[line].split(",");

		if(values.length > 1) {

			if(values[5]) {
				var lanesArray = values[5].split("|");
				systems.push({code: values[0], name: values[1], x: values[2], y: values[3], habitable: values[4].trim(), lanes: lanesArray});
			}

			systems.push({code: values[0], name: values[1], x: values[2], y: values[3], habitable: values[4].trim(), lanes: []});

		}
		console.log(systems[line]);
	}
}

loadSystems();
draw();

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw() {
	clear();
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,WIDTH,HEIGHT);
	
	// draw systems
	systems.forEach(function(system) {
		if(system.habitable == "H") {
			if(system.name == "Sol") {
				drawSystem(system.x * currentScale, system.y * currentScale, "blue");
			} else {
				drawSystem(system.x * currentScale, system.y * currentScale, "green");
			}
		} else if(system.habitable == "T") {
			drawSystem(system.x * currentScale, system.y * currentScale, "orange");
		} else if(system.habitable == "S") {
			drawSystem(system.x * currentScale, system.y * currentScale, "yellow");
		} else {
			drawSystem(system.x * currentScale, system.y * currentScale, "red");
		}
			
	
		// if the current system has hyperlanes, draw the lanes
		if(system.lanes) {

			system.lanes.forEach(function(destination) {
				var destinationSystem;
				
				systems.forEach(function(s) {
					if(s.name == destination.trim()) {
						destinationSystem = s;
						return true;
					}
				});



				ctx.strokeStyle = "rgba(136,139,138,.6)";
				ctx.beginPath();
				ctx.moveTo(system.x * currentScale, system.y * currentScale);
				ctx.lineTo(destinationSystem.x * currentScale, destinationSystem.y * currentScale);
				ctx.closePath();
				ctx.stroke();

			}); // end draw lanes forEach
		}
		
	}); // end draw system forEach
	
	// Draw Mouseover name plate
	if(namePlate) {
		var letters = namePlate.name.length;
		var widthFactor;
		var heightFactor;
		
		if(currentScale < 3) {
			widthFactor = 5;
			heightFactor = 1;
			ctx.font = "10px Verdana";
		} else if(currentScale < 5) {
			widthFactor = 7;
			heightFactor = 3;
			ctx.font = "14px Verdana";
		} else if(currentScale >=5) {
			widthFactor = 9;
			heightFactor = 5;
			ctx.font = "18px Verdana";
		}
		
		
		
		ctx.beginPath();
		ctx.strokeStyle = "rgba(136,139,138,1)";
		ctx.fillStyle = "rgba(136,139,138,.6)";
		ctx.rect(namePlate.x - 25, namePlate.y + 20 - heightFactor, letters * widthFactor + 5, 25 + heightFactor);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
		
		ctx.fillStyle = "white";
		ctx.fillText(namePlate.name, namePlate.x - 20, namePlate.y + 35);
	}

}

// mouse move Event
function myMove(e) {
	namePlate = undefined;
	draw();
	
	// tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();
	
	// get the current mouse position
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);
	
	// test each system hex to see if the mouse is over italics
	systems.forEach(function(system) {
			
		var sides = 6;
		var size = 4 * currentScale;
		ctx.beginPath();
		ctx.moveTo(system.x * currentScale + size * Math.cos(0), system.y * currentScale + size * Math.sin(0));
		
		for(var i = 1; i <= sides; i++) {
			ctx.lineTo(system.x * currentScale + (size * Math.cos(i * 2 * Math.PI / sides)), system.y * currentScale + (size * Math.sin(i * 2 * Math.PI / sides)));
		}

		
		var rect = canvas.getBoundingClientRect();
		var x = e.clientX - rect.left;
		var y = e.clientY - rect.top;

		if(ctx.isPointInPath(x,y)) {
			namePlate = {x: mx, y: my, name: system.name};
			draw();
		}
		
	});
}



function drawSystem(x, y, color) {
	
	if(color == "green") {
		ctx.strokeStyle = "rgba(65,145,26,1)";
		ctx.fillStyle = "rgba(65,145,26,.5)";
	}
	
	if(color == "blue") {
		ctx.strokeStyle = "rgba(32,130,176,1)";
		ctx.fillStyle = "rgba(32,130,176,.5)";
	}
	
	if(color == "yellow") {
		ctx.strokeStyle = "rgba(213,194,19,1)";
		ctx.fillStyle = "rgba(213,194,19,.5)";
	}
	
	if(color == "red") {
		ctx.strokeStyle = "rgba(175,28,18,1)";
		ctx.fillStyle = "rgba(175,28,18,.5)";
	}
	
	if(color == "orange") {
		ctx.strokeStyle = "rgba(194, 117, 10,1)";
		ctx.fillStyle = "rgba(194, 117, 10,.5)";
	}
	
	/* Draw as circle
	ctx.beginPath();
	ctx.arc(x, y, currentScale*2, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	*/
	
	// Draw as hexagon
	var sides = 6;
	var size = 4*currentScale;
	ctx.beginPath();
	ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
	
	for(var i = 1; i <= sides; i++) {
		ctx.lineTo(x + (size * Math.cos(i * 2 * Math.PI / sides)), y + (size * Math.sin(i * 2 * Math.PI / sides)));
	}
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

}

// Event handlers for panning the canvas
canvas.addEventListener('mousedown', function(e) {handleMouseDown(e)});
canvas.addEventListener('mouseup', function(e) {handleMouseUp(e)});
canvas.addEventListener('mousemove', function(e) {handleMouseMove(e)});
canvas.addEventListener('mouseout', function(e) {handleMouseOut(e)});



// Handle Zoom scroll
canvas.addEventListener("wheel", function(event) {
	var zoomFactor = event.deltaY/100;
	if((currentScale + zoomFactor) >= minScale && (currentScale + zoomFactor) <= maxScale) {
		currentScale += zoomFactor;
		draw();
	}
});

