//Pratto Priscila
//tp1 Comisión 1

int movimiento;
int segundos;
int contador;
int sumacontador;

int botonX= 280;
int botonY= 420;
int botonAncho= 80;
int botonAlto= 30;

PFont font;
PImage imagen;
PImage imagen2;
PImage imagen3;





void setup() {
  size(640, 480);
  segundos= 0;
  movimiento = 300;
  contador= 0;
  sumacontador= 1; 
  

  background(255);
  textAlign(CENTER);
  textSize(60);
  font= loadFont("Arial-Black-40.vlw");
  imagen= loadImage("foto1.jpg");
  imagen2= loadImage("foto2.jpg");
  imagen3= loadImage("foto3.jpg");
}

void draw() {
  contador=contador+sumacontador; 

  if (contador%60==0) {
    segundos++;
  }
  if (segundos<=3) {
    fill(0, 255, 255);
    movimiento = contador;

    println(movimiento);
    background(0);
    image(imagen, 0, 0, 640, 480);
    fill(255);
    textFont(font);
    text("Las cataratas del iguazu", 320, movimiento);
  }

  //pantalla 2
  else if (segundos >3 && segundos <6) {
    movimiento = contador;
    fill(34, 95, 21);
    textFont(font);
    image(imagen2, 0, 0, 640, 480);
    textSize(40);
    text("son un conjunto de cataratas\n que se localizan en el río Iguazú,\n en el límite entre la provincia\n argentina de Misiones", movimiento, height/3);
    textSize(39);
    fill(255, 255, 255);
    text("son un conjunto de cataratas\n que se localizan en el río Iguazú,\n en el límite entre la provincia\n argentina de Misiones", movimiento, height/3);
  }

  //pantalla 3
  else {
    movimiento = contador/2;
    fill(0, 244);
    image(imagen3, 0, 0, 640, 480);
    textSize(25);
    text("Están formadas por 275 saltos;\n el 80 % de ellos se ubican del lado argentino.\n Son reconocidas de forma unánime\n como las más espectaculares del mundo. ", 310, movimiento);
    fill(255);
    textSize(24);
    text("Están formadas por 275 saltos;\n el 80 % de ellos se ubican del lado argentino.\n Son reconocidas de forma unánime\n como las más espectaculares del mundo. ", 310, movimiento);
    fill(255);
    rect(botonX, botonY, botonAncho, botonAlto);
    fill(25, 15, 30);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("reiniciar", botonX + botonAncho/2, botonY + botonAlto/2);
  }
}


void mousePressed() {
  segundos = 0;
  contador= 0;
  sumacontador= 1;
   movimiento = 300; 
   
  
  if (segundos== 3) {
  }

  if (segundos == 3 && mouseX >= botonX && mouseX <= botonX + botonAncho && mouseY >= botonY && mouseY <= botonY + botonAlto) {
  }
  
  
}
