class Principal {
  constructor() {
    this.timer = 0;
    this.timerSeg = 0;
    this.enem = new enemigo(400, 400);
    this.personaje = new personaje(20, 300);

    this.enemi = [];
    for (let i=0; i<7; i++) {
      this.enemi[i] = new enemigo(535, 215+i*40);
    }
    this.estado = "inicio";
    this.tocaron = 0;

    this.fondo = [];
    this.carga();
  }
  carga() {
    for (let i=0; i<5; i++) {
      this.fondo.push(loadImage('data/fondo' +i+ '.png'));
    }
  }

  dibujar() {
    if (this.estado == "inicio") {
      this.inicio();
    } else if (this.estado == "reglas") {
      this.reglas();
    } else if (this.estado == "juego") {
      this.juego();
    } else if (this.estado == "ganaste") {
      this.pantallaBuena();
    } else if (this.estado == "perdiste") {
      this.pantallaMala();
    }
  }

  inicio() {
    background(0);
    image(this.fondo [3], 0, 0, 550, 400);
    push();
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text("EL SONIDO DE UN TRUENO\n ray bradbury ", 280, 170 );
    pop();
    fill(255);
    textAlign(CENTER);
    text("Somos un cazador que viajo al pasado para matar a un tyrannosaurus rex\n, pero la cosa se salio de control\n y debemos volver a la maquina del tiempo antes que\n vuelva al futuro", 280, 230 );
  }
  reglas() { // estado 1
    //push();
    background(0);
    image(this.fondo [4], 0, 0, 500, 400);
    push();
    textAlign(CENTER);
    textSize(20);
    fill(5, 5, 5);
    text("OBJETIVO", 250, 200);
    text("OBJETIVO", 250, 202);
    pop();
    push();
    fill(5, 5, 5);
    textSize(15);
    text("debemos esquivar las piedras volcanicas,CUIDADO!!!\n si una de estas nos toca perderemos. Debemos llegar a la\n nave en un periodo de 20 segundos ", 250, 220);
    text("debemos esquivar las piedras volcanicas,CUIDADO!!!\n si una de estas nos toca perderemos. Debemos llegar a la\n nave en un periodo de 20 segundos ", 250, 221);
    pop();
    //pop();
  }

  juego() {
    image(this.fondo [0], 0, -100, 500, 530);
    this.tocado();
    this.timer++;
    if (this.timer >= 60) {
      this.timerSeg++;
      this.timer = 0;
    }
    text("tiempo: "+this.timerSeg, 25, 10);

    this.personaje.dibujar();
    for (let i=0; i<5; i++) {
      this.enemi[i].dibujarEnemigo();
    }
    this.tocado();
    if (this.tocaron == 1) {
      this.estado = "perdiste";
    }

    if (this.timerSeg==20) {
      this.estado = "ganaste";
    }
  }

  pantallaBuena() { // estado 3
    push();
    background(0);
    image(this.fondo [2], 0, 0, 500, 400);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("ganaste", 250, 200);
    text("presione Enter", 250, 230);
    pop();
    this.reinicio();
  }
  pantallaMala() { // estado 4
    push();
    background(0);
    image(this.fondo [4], 0, 0, 500, 400);
    fill(5, 5, 5);
    textAlign(CENTER);
    textSize(20);
    text("perdiste", 250, 200);
    text("presione Enter", 250, 230);
    pop();
    this.reinicio();
  }

  colision(ex, ey, eal, ean, px, py, pan, pal) {
    return px > ex-ean/2 && py-pal/2>ey-eal && py+pal/2<ey+eal;
  }

  tocado() {
    for (let i=0; i<5; i++) {
      if (this.colision(this.enemi[i].posX, this.enemi[i].posY, 30, 30, this.personaje.posX, this.personaje.posY, 20, 20)&& this.enemi[i].vida) {
        this.enemi[i].posX=width+30;
        this.tocaron = 1;
      }
    }
  }

  reinicio() {
    this.timer = 0;
    this.timerSeg = 0;
    this.enem = new enemigo(400, 400);
    this.personaje = new personaje(20, 300);
    for (let i=0; i<5; i++) {
      this.enemi[i] = new enemigo(535, 215+i*40);
    }
    this.tocaron = 0;
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);

    if (keyCode == ENTER && this.estado == "inicio") {
      this.estado = "reglas";
    } else if (keyCode == ENTER && this.estado == "reglas") {
      this.estado = "juego";
    } else if (keyCode == ENTER && this.estado == "ganaste") {
      this.estado = "inicio";
    } else if (keyCode == ENTER && this.estado == "perdiste") {
      this.estado = "inicio";
    }
  }
}
