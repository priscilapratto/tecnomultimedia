//Pratto Priscila
//tp2 Comisio 1

PImage imagen;
int cant = 10; 
int tam;




void setup(){
  

size(800,400); 
imagen= loadImage("cuadrado.jpg");

tam=height/cant;





}

void draw(){
  
  background(255,255,255);
  image(imagen,0,0,400,400);

     strokeWeight(5);
 for(int x=400; x<= width; x+=10){
    for(int y=0; y<= height; y+=10){
    line(x,y,x+10,y+10);
  
  
  }
  
 
    
    }
   }  
   
