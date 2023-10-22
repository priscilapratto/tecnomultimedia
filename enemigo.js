class enemigo { 
constructor(posX,posY){
this.posX = posX; 
this.posY = posY; 
this.colorenemigo = color(0,255,0);
this.vel = random(0.5, 1.5);
this. vida = true; 


}

dibujarEnemigo(){
  if(this.vida){
  
  fill(this.colorenemigo); 
  ellipse(this.posX, this.posY,15,15); 
 this.mover();
}
}
 //matar(){
// this.vida = false; 
 // }
 



  mover() {
    this.posX -= this.vel;
    if (this.posX < 0) {
      this.posX = 530;
    }
  }






}
