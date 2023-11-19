//pratto priscila
//tp5, comision 1
//https://www.youtube.com/watch?v=6RzR_GCPOYI


let objJuego;



function setup() {
  createCanvas(500, 400);
  objJuego = new Principal();
  
}


function draw() {
  background(8, 3, 3);
  objJuego.dibujar();
  
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
