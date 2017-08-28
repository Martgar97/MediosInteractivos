function setup() { 
  createCanvas(510, 460);
  background(244,238,218);
  

  //ciculo morado 2
  fill(10,0,200,35)
  noStroke();
  ellipse(125,125,156,156)
  
  //ciculo morado
  fill(150,0,200,80)
  noStroke();
  ellipse(125,125,150,150)
  
  
  //circulo azul;
  fill(0,0,255,105);
  noStroke();
  ellipse(125,125,130,130);
  
  //circulo amarillo
  strokeWeight(4)
  fill(255,215,0); 
 	stroke(0,0,0);  
  ellipse(125,125,90,90);
  
  //lineas esquina derecha inferior
  strokeWeight(3);
  line(305,400,510,200);
  line(470,290,510,290);
  line(470,340,510,340);
  
  strokeWeight(2);
  line(375,450,480,300);

  //circulo naranja
  fill(255,195,0,180);
  noStroke();
  ellipse(445,380,75,75);  
  //circulo amarillo
  fill(255,255,0,90);
  noStroke();
  ellipse(445,380,85,85);
  
  //circulo rosado derecha inferior
  fill(255,153,110,245);
  strokeWeight(1);
  ellipse(445,380,70,70);
  
  //circulo azul derecha inferior
  strokeWeight(2);  
  fill(50,60,179);
  ellipse(440,375,50,50);
  
  //pestana negra arriba
  beginShape();
  stroke(0,0,0);
  fill(0,0,0);
  vertex(155,50);
  vertex(165,35);
  vertex(365,130);
  vertex(355,158);
  endShape(CLOSE);
  
  //rectangulo cafe
  beginShape();
  fill(180,110,0);
  stroke(255,25,255);
  noStroke();
  vertex(290,30);
  vertex(340,73);
  vertex(320,112);
  vertex(273,90);
	endShape(CLOSE);
  
  //rectangulo azil clarito
  beginShape();
  stroke(255,0,0);
  noStroke();
  fill(210,220,255);
  vertex(340,74);
  vertex(352,86);
  vertex(330,114);
  vertex(321,111);
  endShape(CLOSE);
  
  //rectangulo verde
  beginShape();
  stroke(255,0,0);
  fill(90,155,10);
  noStroke();
  vertex(365,97);
  vertex(379,111);
  vertex(363,131);
  vertex(348,122);
  endShape();
  
  //rectangulo negro
  beginShape();
  fill(0,0,0);
  stroke(255,0,0);
  noStroke();
  vertex(339,74);
  vertex(352,86);
  vertex(375,54);
  vertex(357,43);
  endShape(CLOSE);
  
  //rectangulo verde grande
  beginShape();
  fill(25,150,0);
  stroke(255,0,0);
  noStroke();
  vertex(357,43);
  vertex(373,11);
  vertex(346,0);
  vertex(300,0);
  vertex(299,4);
  endShape(CLOSE);
  
  //rectangulo azul arriba
  beginShape();
  fill(95,146,175);
  stroke(255,0,0);
  noStroke();
  vertex(373,11);
  vertex(400,22);
  vertex(411,5);
  vertex(381,0);
  endShape(CLOSE);
  
  //rectangulo rosado linea negra
  beginShape();
  fill(232,140,142);
  stroke(255,0,0);
  noStroke();
  vertex(420,25);
  vertex(435,36);
  vertex(450,14);
  vertex(430,10);
  endShape(CLOSE);
  
  //lineas verticales encima pestana
  stroke(0,0,0)
  line(365,130,460,0);
  line(270,100,300,0);
  line(320,110,380,0);
  line(330,115,415,0);
  line(345,125,438,0);
  
  //lineas hortizontales
  line(290,30,379,110);
  line(300,5,405,75);
  line(345,0,435,35);
  line(385,0,449,15);
  
  //linea negra
  strokeWeight(7);
  line(362,32,550,20);
  
  //linea roja
  strokeWeight(4);
  stroke(215,0,10);
  line(358,78,550,48);
}