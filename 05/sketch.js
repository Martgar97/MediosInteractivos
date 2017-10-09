function setup() { 
  createCanvas(400, 400);
  angleMode(DEGREES);
} 

function draw() { 
  background(18,0,25);
  
  var misSegundos= second();
  var misMinutos= minute();
  var misHoras= hour();
  
  var misDias= day();
  var misMeses= month();
  var misAños= year();
  
  var anchoRectSeg= map(misSegundos,0,59,0,359);
  var anchoRectMin= map(misMinutos,0,59,0,359);
  var anchoRectH= map(misHoras,0,12,0,359);
  
  var anguloSeg=0
 
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
  
//tierra decoracion
  fill(0,102,0);
  ellipse(200,200,170,170);
  
  fill(102,51,0);
  ellipse(200,200,160,160);
  
  fill(204,102,0);
  ellipse(200,200,110,110);
  
  fill(255,255,51);
  ellipse(200,200,70,70);
  

  //tiempo segundo
  push();
  translate(200,200);
  rotate(anchoRectSeg);
 	rect(100,0,20,-20);
  pop();
  
  //tiempo minuto
  push();
  translate(200,200);
  rotate(anchoRectMin);
  line(0,0,0,-60);
  pop();

  //tiempo hora
	push();
  translate(200,200);
  rotate(anchoRectH);
  stroke(255,0,0);
  ellipse(50,-160,45,45);
  pop(); 
}