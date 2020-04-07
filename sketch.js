var grosor;
var c;
var slider;
let img;
let goma;
var pickColor;
var pinta;
var lapiz;

var ultimoColor;

var output;

function preload() {
  img = loadImage('colores.png');
  goma = loadImage('goma.png');
  archivo = loadImage('new file.png');
  lapiz = loadImage('lapiz.png');
}

function setup() {
  createCanvas(800, 400);
  slider = document.getElementById("myRange");
  grosor = slider.value;
  
  
  c = color(0,0,0);
  archivo.resize(50,50);
  img.resize(280,height);
  goma.resize(50,50);
  lapiz.resize(50,50);
  background(255);
  ultimoColor=c;
}

function draw() {
  grosor = slider.value;
  fill(89,133,211);
  strokeWeight(0);
  rect(0,0,width,60);
  image(img,520,0);
  image(goma,85,5);
  image(archivo,20,5);
  image(lapiz,160,5);
  fill(0);
  text("Colores:",width/2,12);
  text(c,width/2,24);
  
  text("Grosor: "+grosor,270,52);
  
  
  
  strokeWeight(grosor);
  stroke(c);
  line(370,25,370,25);
  
  creaColores();
  
}

function mousePressed(){
  if(mouseY > 60 && mouseX < width-280){
    strokeWeight(grosor);
    stroke(c);
    line(mouseX,mouseY,pmouseX,pmouseY);
    pickColor = false;
    pinta =true;
  } else if(mouseX>width-280 && mouseX < width){
      pinta = false;
      pickColor = true;
      c = get(mouseX,mouseY);
      ultimoColor=c;
  } else {
    pickColor = false;
    pinta = false;
  }
  
  defaultColors();
  
  //goma
  if(c != 255 && mouseX >80 && mouseX < 135 && mouseY > 5 && mouseY < 55){
    ultimoColor=c;
    c = 255;
    fill(c);
     }
  
  //limpiar
  if(mouseX >20 && mouseX < 70 && mouseY > 5 && mouseY < 55)borrar();
  
  //lapiz
  if(mouseX >160 && mouseX < 210 && mouseY > 5 && mouseY < 55) c = ultimoColor;
    
  
}

function mouseDragged(){
  if(!pickColor && pinta && mouseY > 60 && mouseX < width-280){
    strokeWeight(grosor);
    stroke(c);
    line(mouseX,mouseY,pmouseX,pmouseY);
  } else if(pickColor && !pinta && mouseX>width-280 && mouseX < width){
      c = get(mouseX,mouseY);
      ultimoColor=c;
      pinta = false;
  }
}

function borrar(){
  background(255);
}

function defaultColors(){
  //Rojo
if(mouseX>401 && mouseX<411 && mouseY > 31 && mouseY<41){c=get(mouseX,mouseY);ultimoColor=c;}
  //Verde
  if(mouseX>415 && mouseX<425 && mouseY > 31 && mouseY<41){c=get(mouseX,mouseY);ultimoColor=c;}
  //Azul
  if(mouseX>429 && mouseX<439 && mouseY > 31 && mouseY<41){c=get(mouseX,mouseY);ultimoColor=c;}
  //Negro{
  if(mouseX>443 && mouseX<453 && mouseY > 31 && mouseY<41){c=get(mouseX,mouseY);ultimoColor=c;}
  //Blanco
  if(mouseX>457 && mouseX<467 && mouseY > 31 && mouseY<41){c=get(mouseX,mouseY);ultimoColor=c;}
  //Gris
  if(mouseX>471 && mouseX<481 && mouseY > 31 && mouseY<41){c=get(mouseX,mouseY);ultimoColor=c;}
  //Amarillo
  if(mouseX>401 && mouseX<411 && mouseY > 45 && mouseY<55){c=get(mouseX,mouseY);ultimoColor=c;}
  //Cian
  if(mouseX>415 && mouseX<425 && mouseY > 45 && mouseY<55){c=get(mouseX,mouseY);ultimoColor=c;}
  //Magenta
   if (mouseX>429 && mouseX<439 && mouseY > 45 && mouseY<55){c=get(mouseX,mouseY);ultimoColor=c;}
  //Marron
    if(mouseX>443 && mouseX<453 && mouseY > 45 && mouseY<55){c=get(mouseX,mouseY);ultimoColor=c;}
  //Lila
    if(mouseX>457 && mouseX<467 && mouseY > 45 && mouseY<55){c=get(mouseX,mouseY);ultimoColor=c;}
  //Oliva
    if(mouseX>471 && mouseX<481 && mouseY > 45 && mouseY<55){c=get(mouseX,mouseY);ultimoColor=c;}

}

function creaColores(){
  noStroke();
  fill(255,0,0); //Rojo
  rect(401,31,10,10);
  
  fill(0,255,0); //Verde
  rect(415,31,10,10);
  
  fill(0,0,255); //Azul
  rect(429,31,10,10);
  
  fill(0); //Negro
  rect(443,31,10,10);
  
  fill(255); //Blanco
  rect(457,31,10,10);
  
  fill(128); //Gris
  rect(471,31,10,10);
  
  fill(255,255,0); //Amarillo
  rect(401,45,10,10);
  
  fill(0,255,255); //Cian
  rect(415,45,10,10);
  
  fill(255,0,255); //Magenta
  rect(429,45,10,10);
  
  fill(165,42,42); //Marron
  rect(443,45,10,10);

  fill(128,0,128); //Lila
  rect(457,45,10,10);
  
  fill(181,230,29); //Oliva
  rect(471,45,10,10);
  
}

