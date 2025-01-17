// canvas related variables
//var canvas=document.getElementById("canvas");
//var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;

// account for scrolling
function reOffset(){
  var BB=canvas.getBoundingClientRect();
  offsetX=BB.left;
  offsetY=BB.top;        
}

var offsetX,offsetY;
reOffset();
window.onscroll=function(e){ reOffset(); }
window.onresize=function(e){ reOffset(); }

// mouse drag related variables
var isDown=false;
var startX,startY;

// the accumulated horizontal(X) & vertical(Y) panning the user has done in total
var netPanningX=0;
var netPanningY=0;

// just for demo: display the accumulated panning
var results=document.getElementById("results");

// draw the numbered horizontal & vertical reference lines
//for(var x=0;x<100;x++){ ctx.fillText(x,x*20,ch/2); }
//for(var y=-50;y<50;y++){ ctx.fillText(y,cw/2,y*20); }

// listen for mouse events
//document.getElementById("canvas").mousedown(function(e){handleMouseDown(e);});
//document.getElementById("canvas").mousemove(function(e){handleMouseMove(e);});
//document.getElementById("canvas").mouseup(function(e){handleMouseUp(e);});
//document.getElementById("canvas").mouseout(function(e){handleMouseOut(e);});

function handleMouseDown(e){
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();

  // calc the starting mouse X,Y for the drag
  startX=parseInt(e.clientX-offsetX);
  startY=parseInt(e.clientY-offsetY);

/*
  if(document.getElementById("chkDraw").checked) {
	  territoryX.push(e.clientX-offsetX);
	  territoryY.push(e.clientY-offsetY);

  }
  */
  // set the isDragging flag
  isDown=true;
}

function handleMouseUp(e){
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();

  // clear the isDragging flag
  isDown=false;
}

function handleMouseOut(e){
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();

  // clear the isDragging flag
  isDown=false;
}

function handleMouseMove(e){

  // only do this code if the mouse is being dragged
  if(!isDown){return;}
  
  // tell the browser we're handling this event
  e.preventDefault();
  e.stopPropagation();

  // get the current mouse position
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // dx & dy are the distance the mouse has moved since
  // the last mousemove event
  var dx=mouseX-startX;
  var dy=mouseY-startY;

  // accumulate the net panning done
  netPanningX+=dx;
  netPanningY+=dy;

  //ctx.clearRect(0,0,cw,ch);
  
  ctx.translate(dx, dy);
 /* 
  if(netPanningX > 0) {
	  ctx.setTransform(1, 0, 0, 1, 0, 0);
	  netPanningX=0;
  }
  
  if(netPanningY > 0) {
	  ctx.setTransform(1, 0, 0, 1, 0, 0);
	  netPanningy=0;
  }
  */
  draw();
  // reset the vars for next mousemove

  startX=mouseX;
  startY=mouseY;
  // display the horizontal & vertical reference lines
  // The horizontal line is offset leftward or rightward by netPanningX
  // The vertical line is offset upward or downward by netPanningY
  //ctx.clearRect(0,0,cw,ch);
  //for(var x=-50;x<50;x++){ ctx.fillText(x,x*20+netPanningX,ch/2); }
  //for(var y=-50;y<50;y++){ ctx.fillText(y,cw/2,y*20+netPanningY); }

}