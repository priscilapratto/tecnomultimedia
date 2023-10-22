class Imagenes {
  constructor() {
    this.load();
    this.num = 0;
  }

  load(){
    this.imagenes = [];
    for (let i = 0; i < 5; i++) {
      this.imagenes[i] = loadImage("data/fondo" + i + ".jpg");
    }
  }
