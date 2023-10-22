class historia{ 
constructor(){
this.estado = 0; 
this.juego = new juego(); 
//this.imagenes = new imagenes(); 
}

dibujar(){
if(this.estado == 0){
this.inicio();
} else if (this.estado == 1){
this.reglas(); 
}else if(this.estado == 2){
this.pantallaJuego(); 
}

}


teclaPresionada(keyCode){
this.juego.teclaPresionada(keyCode); 
if(keyCode == ENTER && this.estado == 0){
this.estado = 1; 
} else if(keyCode == ENTER && this.estado == 1){
this.estado = 2; 
}

}

inicio(){ //estado 0
push();
    background(0);
     //this.imagenes(this.imagenes[0], 500, 400);
    //imagen
    textAlign(CENTER);
    fill(255);
    text("EL SONIDO DE UN TRUENO\n ray bradbury ",250,100 );
    text("Somos un cazador que viajo al pasado para matar a un tyrannosaurus rex\n, pero la cosa se salio de control\n y debemos volver a la maquina del tiempo antes que\n vuelva al futuro",250,200 );
    pop();

}

reglas(){ // estado 1
push();
    background(0);
    //imagen
    textAlign(CENTER);
    fill(255);
    text("OBJETIVO", 250,100);
    text("debemos esquivar las piedras volcanicas,CUIDADO!!!\n si una de estas nos toca perderemos. Debemos llegar a la\n nave antes de que el tiempo se agote",250,200);
    pop();
}

pantallaJuego(){ //estado 2
  background(0);
  this.juego.dibujar(); 
}


pantallaBuena(){ // estado 3
}

pantallaMala(){ // estado 4
}



}
