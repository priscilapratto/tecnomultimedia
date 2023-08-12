//Pratto Priscila
//tp2 Comision 1
//https://www.youtube.com/watch?v=N-JXUkMV4sU
PImage imagen;

void setup() {
background(255); 

  size(800, 400);
  imagen= loadImage("cuadrado.jpg");
}

void draw() {

  
  image(imagen, 0, 0, 400, 400);



  mislineasdiagonales(400, 0, width, 400, 35, false);//lineas de arriba hacia la derecha 
  cuadradohorizontal(450, 270, 300, 75); //rectangulo horizontal 1
  cuadradohorizontal(450, 57, 300, 75); //rectangulo horizontale  2
  cuadradohorizontal(450, 60, 80, 285); // rectangulo vertical 1
  cuadradohorizontal(670, 60, 80, 285); // rectangulo vertical 2
  mislineasrectas(60, 330); //lineas rectas
  cuadradohorizontal(536, 133, 127, 132);//cuadrado del medio
  mislineasdiagonales(565, 135, 684, 259, 25, true); //lineas de arriba hacia la izquierda 
}

void cuadradohorizontal(int anchox, int altoy, int anchoy, int altox) {
  strokeWeight(5);
 
  rect(anchox, altoy, anchoy, altox);
}

void mislineasdiagonales (int posx, int posY, int finX, int finY, int esp, boolean diagonales) {
  int suma = 0;


  if (diagonales== true) {

    suma = esp;
  } else {

    suma = -esp;
  }


  strokeWeight(10);

  for (int x=posx; x <= finX; x+=esp) {
    for (int y=posY; y <= finY; y+=esp) {
      line(x, y, x-suma, y+esp);
    }
  }
}


void mislineasrectas(int pos1, int pos2) {
  strokeWeight(11);

  for (int x=450; x<=750; x+=20) {
    for (int y= pos1; y<=pos2; y+=20) {

      line(x, y, x, y + 20);
    }
  }
}






void mousePressed() {
  float r = randomColor();
  float g = randomColor();
  float b = randomColor();

  if (mouseX>=400 && mouseX<=800) { //al hacer click cambia de color el fondo a colores aleatorios 
    fill(r, g, b);
    background(r,g,b); 
  }

}


float randomColor() {

  return random(255);
}

void keyPressed() {
if(keyCode==' '){ //al tocar el espacio vuelve al color original  
fill(255); 
background(255); 

}




}
