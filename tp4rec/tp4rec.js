//tp4rec
// Pratto Priscila 
// https://www.youtube.com/watch?v=zDd3vCW-99o

let nx, ny, nan, nal; // medidas de las naves
let nmovX = []; // movimiento de la nave en X
let nmovY = [];// movimiento de la nave en Y
let nvelY = []; // velocidad de la nave en Y

let cant; // cantidad de naves 
let cx, cy, can, cal; // medidas del cañon
let bx, by, ban, bal; // medidas de la bala 

let cargador; // cargador de disparo
let cargaMax; // maxima capacidad del cargador 
let disparada; // disparo 

let pasaron; // naves que se escapan 
let derribadas; // naves que derribamos 
let tiempo; // contador 
let timer;// contador 
let estado; // pantallas 
let fondos = []; // imagenes 



function setup() {
  createCanvas(600, 700);
  nx = 150;
  ny = 0;
  nan = 50;
  nal = 40;

  cant = 10;

  cx = width/2;
  cy = 575;
  can = 25;
  cal = 50;

  bx = cx;
  by = cy;
  ban = 15;
  bal = 15;

  cargador = 0;
  cargaMax = true;
  disparada = false;

  pasaron = 0;
  derribadas = 0;
  tiempo = 0;
  timer = 0;
  estado = "comenzar";

  fondos[0] = loadImage("data/foto.png");
  fondos[1] = loadImage("data/foto1.png");
  fondos[2] = loadImage("data/foto2.png");
  fondos[3] = loadImage("data/foto3.png");
  fondos[4] = loadImage("data/foto4.png");

  for (let i=0; i < cant; i++) {
    nmovX [i] = i*nan;
    nmovY [i] = random(-150, -100);
    nvelY [i] = random(1.0, 1.5);
  }
}

function draw() {
  background(200);
  if (estado == "comenzar") { //pantalla de inicio
    image(fondos[3], 0, 0);
    push();
    imageMode(CENTER); 
    image(fondos[2], width/2, height/2-150);
    pop();
    push();
    fill(255);
    textSize(20);
    text("Reglas y objetivos:", 225, 350);
    text("El jugador debe derribar un total de 10 naves\n para ganar, no debe dejar que las naves escapen,\n si se escapan 10 naves pierdes. CUIDADO!! solo \n cuentas con 20 segundos y 30 tiros", 100, 400);
    pop();
    textSize(25);
    fill(188, 2,2);
    ellipse(530, 610, 120, 60);//boton play
    fill(18, 19, 21);
    text("Play", 505, 609);
    fill(188, 2, 2);
    ellipse(130, 610, 120, 60)//boton creditos
      fill(18, 19, 21);
    text("Créditos", 80, 615);
  } else
    if (estado == "derrota") { //pantalla de derrota
      image(fondos[3], 0, 0);
      push();
      fill(255);
      textSize(48);
      text("GAME OVER", 150, 300);
      pop();
      push();
      fill(196, 196, 196);
      textSize(28);
      text("Click para volver al inicio", 150, 350);
      pop();
    } else
      if (estado == "victoria") { //pantalla de victoria
        image(fondos[3], 0, 0);
        push();
        fill(255);
        textSize(48);
        text("FELICIDADES GANASTE", 30, 300);
        pop();
        push();
        fill(196, 196, 196);
        textSize(28);
        text("Click para volver al inicio", 150, 350);
        pop();
      } else
        if (estado=="credito") { //pantalla de creditos
          image(fondos[3], 0, 0);
          push();
          fill(255);
          textSize(40);
          text("CRÉDITOS", 200, 300);
          pop();
          push();
          fill(190, 196, 195);
          textSize(20);
          text("Pratto Priscila 93539/3", 200, 350);
          pop();
        } else
          if (estado == "juego") {
            image(fondos[3], 0, 0);
            tiempo++;
            if (tiempo >= 60) {
              timer++;
              tiempo = 0;
            }


            for (let i = 0; i < cant; i++) {
              navecita(nmovX[i], nmovY [i], nan, nal);
              nmovY [i] += nvelY [i];
              if (nmovY [i] > 600) {
                nmovY [i] = random(-300, -100);
                pasaron++;
              }
              if (bx>nmovX[i] && bx<nmovX[i]+nan && by>nmovY[i] && by<nmovY[i]+nal) {
                nmovY[i] = random(-150, -100);
                disparada= false;
                derribadas++;
              }
            }

            proyectil(bx, by, ban, bal);
            cañon(cx, cy, can, cal);


            if (keyIsPressed == true) {
              if (keyCode == RIGHT_ARROW) {
                cx+=5;
              }
              if (keyCode == LEFT_ARROW) {
                cx-=5;
              }
              if (cx>=width+25) {
                cx=0;
              }
              if (cx<=0-25) {
                cx=width;
              }
            }

            if (disparada && by>0) {
              by-=10;
              by= by-1;
            } else {
              by=cy;
              bx=cx;
              disparada = false;
            }

            interfaz(derribadas, pasaron, timer);
            if (pasaron >= 10 || timer >= 20) {
              estado = "derrota";
            } else if (derribadas >= 10) {
              estado = "victoria";
            }
          }
}
function keyPressed() {
  if (cargador<30) {
    if (keyCode == 32) {
      disparada = true;
      cargador += 1;
    }
  } else {
    cargadorMaximo = false;
  }
}

function mousePressed() {
  if (estado=="derrota") {
    estado="comenzar";
  } else
    if (estado=="victoria") {
      estado="comenzar";
    } else
      if (estado=="credito") {
        estado="comenzar";
      } else
        if ((mouseX >= 465 && mouseX <=590 )&&(mouseY > 570 && mouseY <= 645)) {
          estado="juego";
          reset();
        } else
          if ((mouseX <= 180 && mouseX >= 73 )&& (mouseY >= 570 && mouseY <= 645 )) {
            estado="credito";
          }
}

function navecita(x, y, ancho, alto) {
  push();
  fill(200, 0, 0);
  imageMode(CENTER);
  rectMode(CENTER);
  //rect(x+25, y, ancho, alto);
  image(fondos[0], x+25, y, ancho+40, alto+70);
  pop();
}

function cañon(x, y, ancho, alto) {
  push();
  fill(250, 255, 230);
  imageMode(CENTER);
  rectMode(CENTER);
  //rect(x, y, ancho, alto);
  image(fondos[1], x, y, ancho+30, alto+70);

  pop();
}

function proyectil(x, y, ancho, alto) {
  push();
  fill(0, 255, 255);
  imageMode(CENTER);
  rectMode(CENTER);
  // rect(x, y, ancho, alto);
  image(fondos[4], x, y, ancho+30, alto+30);
  pop();
}

function interfaz(derribadas, pasaron, timer) {
  push();
  fill(95, 94, 94);
  rect(0, 600, 600, 100);
  line(200, 600, 200, 700);
  line(400, 600, 400, 700);
  fill(0);
  textAlign(CENTER);
  text("derribadas: "+derribadas, 100, 650);
  text("escapes: " +pasaron, 300, 650);
  text("tiempo: "+timer, 500, 650);
  pop();
}

function reset() { //funcion para resetear

  for (let i=0; i < cant; i++) {
    nmovX [i] = i*nan;
    nmovY [i] = random(-150, -100);
    nvelY [i] = random(1.0, 1.5);
  }

  cx = width/2;
  cy = 575;
  derribadas = 0;
  pasaron = 0;
  cargador = 0;
  timer = 0;
  tiempo = 0;
}
