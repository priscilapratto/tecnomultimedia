class juego { 
constructor(){
this.enem = new enemigo(400,400); 
this.personaje = new personaje(20,375); 
 

this.enemi = [];
for(let i=0; i<5; i++){
this.enemi[i] = new enemigo(535,250+i*40);
}
}

dibujar(){
  //this.enemigo.dibujar(); 
  
  this.personaje.dibujar(); 
  for(let i=0; i<5; i++){
  this.enemi[i].dibujarEnemigo();
  }
  
  
 
  }



teclaPresionada(keyCode){
this.personaje.teclaPresionada(keyCode);
}


}
