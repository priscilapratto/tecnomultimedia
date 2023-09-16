//pratto priscila
//comision 1
// tp4
//https://www.youtube.com/watch?v=f7LPJrTxkPs
// juego space invaders

let cx, cy, can, calt; // medidas del cañón
let bx, by, btam; // medidas de la  bala
let nx, ny, nancho, nalto; // medidas de la  nave individual
let disparada; // variable para cuando disparemos
let estado; //pantallas
let img; //imagen

let navex = [];  //arreglos de naves
let navey = [];
let dnx = [];
let cant = 5;
let derribos = 0; // variable para las naves derribadas
let escapes = 0; // variable par alas naves que se escapen
let cargador = 0;// variable del cargador de las balas
let cargadorcompleto = true;

function preload() { // funcion para cargar la imagen
  img = loadImage('data/fondo.jpg');
}



function setup() {
  createCanvas(600, 400);
  can = 35;
  calt = 75;
  cx = width/2;
  cy = height-calt/2;
  bx = cx;
  by = cy;
  btam = can;
  disparada = false;
  nx = 0;
  ny = 50;
  nancho = 65;
  nalto = 40;
  for (let i=0; i<cant; i++) {
    navex[i] = random(-300, -100);
    navey[i] = i*nalto;
    dnx[i] = random(2.3, 2.6);
  }
  textSize(25);
  estado = "comenzar";
}

function reset() { //funcion para resetear

  for (let i=0; i<cant; i++) {
    navex[i] = random(-300, -100);
  }
  cx = width/2;
  cy = height-calt/2;
  derribos = 0;
  escapes = 0;
  cargador = 0;
}



function draw() {
  background(0);
  if (estado == "comenzar") { //pantalla de inicio

    push();
    image(img, 0, 0);
    fill(148, 175, 219);
    textSize(48);
    text("Space Invaders", 150, 100);
    fill(3, 59, 152);
    text("Space Invaders", 150, 104);
    pop();
    push();
    fill(255);
    textSize(20);
    text("Reglas y objetivos:", 225, 140);
    text("El jugador debe derribar un total de 5 naves\n para ganar, no debe dejar que las naves escapen,\n si se escapan 3 naves pierdes. CUIDADO!! solo \n cuentas con 20 tiros", 100, 190);
    pop();
    textSize(25);
    fill(147, 160, 224);
    ellipse(530, 350, 120, 60);//boton play
    fill(18, 19, 21);
    text("Play", 505, 355);
    fill(147, 160, 224);
    ellipse(130, 350, 120, 60)//boton creditos
      fill(18, 19, 21);
    text("Créditos", 80, 355);
  } else
    if (estado == "derrota") { //pantalla de derrota
      push();
      image(img, 0, 0);
      fill(255);
      textSize(48);
      text("GAME OVER", 150, 200);
      pop();
      push();
      fill(196, 196, 196);
      textSize(28);
      text("Click para volver al inicio", 150, 240);
      pop();
    } else
      if (estado == "victoria") { //pantalla de victoria
        push();
        image(img, 0, 0);
        fill(255);
        textSize(48);
        text("FELICIDADES GANASTE", 30, 200);
        pop();
        push();
        fill(196, 196, 196);
        textSize(28);
        text("Click para volver al inicio", 150, 240);
        pop();
      } else
        if (estado=="credito") { //pantalla de creditos
          push();
          image(img, 0, 0);
          fill(255);
          textSize(40);
          text("CRÉDITOS", 200, 180);
          pop();
          push();
          fill(190, 196, 195);
          textSize(20);
          text("Pratto Priscila 93539/3", 200, 220);
          pop();
        } else
          if (estado == "juego") { //pantalla de play
            image(img, 0, 0);

            arma(cx, cy, can, calt);


            if (nx>width) {
              nx = -nancho;
            }
            textSize(30);
            if (keyIsPressed===true) {
              if (keyCode=== RIGHT_ARROW && cx<width-can/2) {
                cx+=3;
              }
              if (keyCode=== LEFT_ARROW && cx<width-can/2) {
                cx-=3;
              }
            }
            if (disparada && by>0) {
              by -= 13;
            } else {
              bx = cx;
              by = cy;
              disparada = false;
            }
            proyectil(bx, by, btam);
            if (impacto(bx, by, nx, ny, nancho, nalto)) {
              disparada = false;
              nx = -nancho;
            }
            // implementación del arreglo de naves

            for (let i=0; i<cant; i++) {
              nave(navex[i], navey[i], nancho, nalto);
              navex[i] += dnx[i];
              if (navex[i]>width) {
                navex[i] = random(-300, -100);
                escapes++;
              }
              if (impacto(bx, by, navex[i], navey[i], nancho, nalto)) {
                disparada = false;
                navex[i] = random(-300, -100);
                derribos++;
              }
            }
            push();
            fill(255);
            text("derribos"+ derribos, 50, 50);
            text("escapes" + escapes, 400, 50);
            text(cargador, width/2, 50);
            pop();
            if (escapes > 2) {
              estado = "derrota";
            } else
              if (derribos > 4) {
                estado = "victoria";
              }
          }
}

function keyPressed() {
  if (cargador<20) {
    if (keyCode=== 32) {
      disparada = true;
      cargador++;
    }
  } else {
    cargadorcompleto = false;
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
        if ((mouseX >= 465 && mouseX <=590 )&&(mouseY > 320 && mouseY <= 380)) {
          estado="juego";
          reset();
        } else
          if ((mouseX <= 180 && mouseX >= 73 )&& (mouseY >= 320 && mouseY <= 380 )) {
            estado="credito";
          }
}

function proyectil(x, y, diam) { //pelota
  push();
  fill(147, 160, 224);
  circle(x, y, diam);
  pop();
}

function nave(x, y, ancho, alto) { //funcion de naves
  push();
  fill(154, 163, 193);
  rectMode(CORNER);
  rect(x, y, ancho, alto);
  pop();
}



function impacto(x, y, px, py, ancho, alto) {
  if (x>px&& x<px+ancho && y>py && y<py+alto) {
    return true;
  } else {
    return false;
  }
}

function arma(x, y, ancho, alto) { //cañon
  push();
  fill(115, 70, 240);
  rectMode(CENTER);
  rect(x, y, ancho, alto);
  pop();
}
