//pratto priscila
//tp3 comision 1
//https://youtu.be/j_ctXGLMeGU

PImage [] imagenes = new PImage [12]; //arreglo de imagenes
String [] nombredefilas = {"imagen0.jpg", "imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg", "imagen6.jpg", "imagen7.jpg", "imagen8.jpg", "imagen9.jpg", "imagen10.jpg", "imagen11.jpg"};


int estado;

void setup() {
  textAlign(CENTER);
  
  size(600, 600);
  for (int i=0; i<nombredefilas.length; i++) { //cargar imagenes
    imagenes[i]= loadImage(nombredefilas[i]);
  }
}

void draw() {

  if (estado==0) { //pantallas
    image(imagenes[0], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
 
} else if (estado==1) {
    image(imagenes[1], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40); //botoncircular para continuar
    fill(59,159,224); 
    rect(225,75,350,100); 
   
    textSize(15);
    fill(255);
    text("un cazador paga 10,000 dolares para viajar en el tiempo\n y asi poder cazar a un tyrannosaurus rex,\n deben obedecer a su guia travis en todo momento", 400, 100);
 
 
} else if (estado==2) {
    image(imagenes[2], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
    fill(76,139,112);
    rect(340,85,220,90);
  
    textSize(13);
    fill(255);
    text("no deben tocar nada durante su estancia\n en el pasado y solo deben disparar\n cuando el guia  les de instrucciones\n de hacerlo",450,100);




} else if (estado ==3) {
    image(imagenes[3], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
    fill(203,214,132);
    rect(10,438,285,140);
    fill(0);
    text("travis estuvo analizando al tyranosaurus\n lo cual descubrio que una rama de un arbol\n iba a caer sobre la bestia y asi mismo iba a matarlo,\n cuando la bestia se deja ver eckels se asusta\n y describe el encuentro como\n el sonido de un trueno",150,450);
 



} else if (estado==4) {
    image(imagenes[4], 0, 0, 600, 600);
    circuloa (550, 350, 40); //boton A 
    circulob (50, 350, 40);// boton B
    fill(200,169,211);
    rect(160,410,285,110);
    fill(255);
    text("eckels queda paralizado del miedo,\n a lo cual travis le grita\n furioso que vuelva a la maquina del tiempo\n y espere a los demas",300,435);
    
 

} else if (estado==5) {

    image(imagenes[5], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
    fill(192,211,166);
    rect(275,385,350,90);
    fill(0);
    text("eckels cae por sendero y se adentra en la jungla\n,sus pies se hunden en un musgo verde,\n mientras los demas le disparan a la bestia para derribarla",440,400);
  

} else if (estado==6) {
    image(imagenes[6], 0, 0, 600, 600);
    
    circuloa (550, 350, 40);
    circulob (50, 350, 40);
    fill(147,111,67);
    rect(225,48,350,105);
    fill(255);
    text("cubiertos de sangre,los otros regresan a la maquina del tiempo,\n donde encuentran a eckels, quien\n logro encontrar su camino de regreso a la maquina del tiempo,\n travis decreta que eckels no puede volver\n al futuro ya que causo mucho daño",397,60);
    
  

} else if (estado==7) {

    image(imagenes[7], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
    fill(201,201,201);
    rect(10,50,195,90);
    fill(0);
    text("eckels le pelea a la bestia y\n esta lo mata",105,90);
 

} else if (estado==8) {
   image(imagenes[8], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
    fill(216,147,61);
    rect(255,75,327,150); 
    fill(255);
    text("eckels vuelve al futuro y se da cuenta que cambio\n el presente debastado se sienta y escucha a travis entrando\n a la habitacion.\n respira fuerte, quita el seguro del arma.\n de repente, todo lo que escuchaba eckels\n es el sonido de un trueno",420,100);
    
 

} else if (estado==9) {

    image(imagenes[9], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
    fill(165,141,127);
    rect(10,438,235,120);
    fill(255);
    text("eckels no sobrevive al pasado,\n se enferma y muere",120,490);
    
 

} else if (estado==10) {

    image(imagenes[10], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
    fill(106,73,118);
     rect(10,438,235,120);
     textSize(15);
     fill(255);
     text("autor rey bradbury",125,490);
    
    
 

} else if (estado==11) {

    image(imagenes[11], 0, 0, 600, 600);
    circulodecontinuar(550, 550, 40);
    fill(106,73,118);
    rect(10,438,235,120);
     textSize(15);
     fill(255);
     text("alumna\n pratto priscila netalie 93539/3",125,490);
    
    
  }
}

void mousePressed() {
  if (estado==0&& mouseEnCirculo(550, 550, 20)) {
    estado=1;
  } else if (estado==1 && mouseEnCirculo(550, 550, 20)) {

    estado=2;
  } else if (estado==2 && mouseEnCirculo(550, 550, 20)) {


    estado=3;
  } else if (estado==3 && mouseEnCirculo(550, 550, 20)) {

    estado=4;
  } else if (estado==4 && mouseEnCirculo (550, 350, 40)) {
    estado=5;
  } else if (estado==4 && mouseEnCirculo(50, 350, 40)) {

    estado=7;
  } else if (estado==5 && mouseEnCirculo(550, 550, 20)) {
    estado=6;
  } else if (estado==6 && mouseEnCirculo(50, 350, 40)) {
    estado=9;
  } else if (estado==6 && mouseEnCirculo(550, 350, 40)) {

    estado=8;
  } else if (estado==7 && mouseEnCirculo(550, 550, 20)) {

    estado=0;
  } else if (estado==9 && mouseEnCirculo(550, 550, 20)) {

    estado=0;
  } else if (estado==8 && mouseEnCirculo(550, 550, 20)) {
    estado=10;
  } else if (estado==10 && mouseEnCirculo(550, 550, 20)) {
    estado=11;
    } else if (estado==11 && mouseEnCirculo(550, 550, 20)) {
    estado=0;
   
    
    
  }
}/////////////termina el void mousepressed

boolean mouseEnCirculo (int x, int y, int r) { //funcion propia que retorna un valor
  return dist (mouseX, mouseY, x, y) <=r;
}


void circulodecontinuar (int h, int i, int j) { //funcion propia que no retorna un valor 
  stroke(255);
  fill(227,124,124);
  circle(h, i, j);
}


void circuloa (int h, int i, int j) {

  stroke(255);
  fill(227,124,124);
  circle(h, i, j);
}


void circulob (int h, int i, int j) {
  stroke(255);
  fill(227,124,124); 
  circle(h, i, j);
}
