//pratto priscila
//tp5, comision 1
//link del video 


let objJuego;
//let fondo;
let imagenes; 


function setup() {
  createCanvas(500,400); 
 objJuego = new historia();
  //fondo = new Imagenes();
}


function draw() {
  background(8,3,3); 
objJuego.dibujar(); 
//fondo.load();
}

function keyPressed(){
objJuego.teclaPresionada(keyCode); 

}
