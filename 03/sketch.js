var x=0;
var y=0;
var tamano=75;
var tamano2=100;
var tamano3=150
var diam=50
var diam2=75
var diam3=100
var largox=0
var largox2=0
var largox3=0
var largox4=0
var largox5=0
var largox6=0
var largoy=0
var largoy2=0
var largoy3=0
var largoy4=0
var largoy5=0
var largoy6=0
var velx=10
var velx2=12
var velx3=14
var dirX=1
var dirX2=-1
var dirY=1
var dirY2=-1
var rojo=255

function setup() { 
  createCanvas(400, 400);
  var millisecond = millis();
} 

function draw() { 
  background(0);
  
  //bandera japon
  noStroke();
  fill (rojo,255,255);
  if(millis()>10 && millis()<2000){
    rect(0,0,tamano,tamano);
    tamano= tamano + 18
    velX=1
  }
  fill(rojo,0,0);
  if(millis()>995 && millis()<2000){
    ellipse(200,200,tamano2,tamano2);
    velX=1;
  }
  
  //circulos crecen
  if(millis()>1275 && millis()<2000){
    fill(rojo,0,0);
    ellipse(200,200,tamano2,tamano2);
    tamano2=tamano2+15;
    rojo= rojo-10;
    velX=1;
  }

 
  
  //linea circulos blancos
   if(millis()>2000 && millis()<2300){
    fill(255,255,255);
    ellipse(0,200,50,50);
    velX=1;
   }
  
   if(millis()>2300 && millis()<2600){
    fill(0,255,255);
    ellipse(50,200,50,50);
    velX=1;
   }
  
  if(millis()>2600 && millis()<2900){
    fill(255,255,255);
    ellipse(100,200,50,50);
    velX=1;
   }
  
   if(millis()>2900 && millis()<3200){
    fill(255,255,255);
    ellipse(150,200,50,50);
    velX=1;
   }
  
   if(millis()>3200 && millis()<3500){
    fill(255,255,255);
    ellipse(200,200,50,50);
    velX=1;
   }
  
   if(millis()>3500 && millis()<3800){
    fill(255,255,255);
    ellipse(250,200,50,50);
    velX=1;
   }
  
  if(millis()>3800 && millis()<4200){
    fill(255,0,255);
    ellipse(300,200,50,50);
    velX=1;
   }
  
   if(millis()>4200 && millis()<4500){
    fill(255,255,255);
    ellipse(350,200,50,50);
    velX=1;
   }
  
  if(millis()>4500 && millis()<4800){
    fill(255,255,255);
    ellipse(400,200,50,50);
    velX=1;
   }
  
   //circulos crecen
  if(millis()>4800 && millis()<5500){
    fill(255,255,255);
    ellipse(200,200,tamano2,tamano2);
    tamano2=tamano2-20;
    rojo= rojo+10;
    velX=1;
  }
  
  
  //l-v-1
  if(millis()>7200 && millis()<20000){
    fill(255,0,0);
    rect(85,0,75,largoy);
  	largoy=largoy+15
    velX=1;
  }
  
  //l-h-1
  if(millis()>8650 && millis()<20000){
    fill(0,0,255);
    rect(0,105,largox,55);
  	largox=largox+10
    velX=1;
  }
  
  //l-v-2
   if(millis()>7850 && millis()<20000){
    fill(205,0,50);
    rect(195,0,65,largoy2);
  	largoy2=largoy2+7
    velX=1;
  }
 
  
  //l-h-2
  if(millis()>9550 && millis()<20000){
    fill(50,0,195);
    rect(0,15,largox2,45);
  	largox2=largox2+3
    velX=1;
  }
  
  //l-h-3
   if(millis()>10250 && millis()<20000){
    fill(75,0,155);
    rect(0,355,largox3,40);
  	largox3=largox3+8
    velX=1;
  }
  
  //l-v-3
   if(millis()>11150 && millis()<20000){
    fill(135,0,80);
    rect(295,0,25,largoy3);
  	largoy3=largoy3+7
    velX=1;
  }
  
  //l-v-4
  if(millis()>11850 && millis()<20000){
    fill(105,0,50);
    rect(55,0,20,largoy4);
  	largoy4=largoy4+11
    velX=1;
  }
  
  //l-h-4
  if(millis()>13150 && millis()<20000){
    fill(80,0,155);
    rect(0,295,largox4,20);
  	largox4=largox4+4
    velX=1;
  }
  
  //l-h-5
  if(millis()>14000 && millis()<20000){
    fill(60,20,105);
    rect(0,245,largox5,15);
  	largox5=largox5+9
    velX=1;
  }
  
  //l-v-5
   if(millis()>14650 && millis()<20000){
    fill(95,10,20);
    rect(265,0,10,largoy5);
  	largoy5=largoy5+16
    velX=1;
   }
  
  //l-v-6
  if(millis()>15450 && millis()<20000){
    fill(45,10,20);
    rect(165,0,8,largoy6);
  	largoy6=largoy6+13
    velX=1;
   }
  
  //rectangulos y circulos
  
if(millis()>17050 && millis()<20000){
    fill(205,250,20);
    rect(10,175,40,60);
   }
  
  if(millis()>17750 && millis()<20000){
    fill(255,210,60);
    rect(205,75,45,90);
   }
  if(millis()>18350 && millis()<20000){
    fill(205,250,20);
    rect(325,260,60,35);
   }
  
}
