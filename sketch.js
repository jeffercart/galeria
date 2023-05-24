let piso, ojo, ojol, dib;
let fondo;
let pagina;

function preload() {
  soundFormats('mp3');
  fondo = loadSound("son/fondo.mp3");
  piso = loadImage("img/rizomitas.png");
  ojo = loadImage("img/ojos.jpg");
  a0 = loadImage("img/0.jpg");
  a1 = loadImage("img/1.jpg");
  a2 = loadImage("img/2.jpg");
  a3 = loadImage("img/3.jpg");
  a4 = loadImage("img/4.jpg");
  a5 = loadImage("img/5.jpg");
  a6 = loadImage("img/6.jpg");
  a7 = loadImage("img/7.jpg");
  a8 = loadImage("img/8.jpg");
  a9 = loadImage("img/9.jpg");
  a10 = loadImage("img/10.jpg");
  a11 = loadImage("img/11.jpg");
  a12 = loadImage("img/12.jpg");
  a13 = loadImage("img/13.jpg");
  a14 = loadImage("img/14.jpg");
  a0t = loadImage("img/a0txt.png");
  a1t = loadImage("img/a1txt.png");
  a2t = loadImage("img/a2txt.png");
  a3t = loadImage("img/a3txt.png");
  a4t = loadImage("img/a4txt.png");
  a5t = loadImage("img/a5txt.png");
  a6t = loadImage("img/a6txt.png");
  a7t = loadImage("img/a7txt.png");
  a8t = loadImage("img/a8txt.png");
  a9t = loadImage("img/a9txt.png");
  a10t = loadImage("img/a10txt.png");
  a11t = loadImage("img/a11txt.png");
  a12t = loadImage("img/a12txt.png");
  a13t = loadImage("img/a13txt.png");
  a14t = loadImage("img/a14txt.png");

}

function setup() {
  createCanvas(984, 728, WEBGL);
  cam1 = createCamera();
  text1 = createGraphics(150, 150);
  text1.fill(255);
  text1.textAlign(CENTER);
  text1.textSize(20);
  text1.text("ojos.jpg", 100, 100);
  noCursor();
  pagina=0;
  canvas = document.querySelector('canvas');
  canvas.addEventListener('contextmenu', botonDerecho);
}

function draw() {
  background(0);
  drawScene();
  firstPerson(cam1);
      
  if (frameCount > 600) {
    if      (pagina == 1){
                window.open("https://jeffercart.github.io/cubos/", "_top");} //cubos
    else if (pagina == 2){
               window.open("https://jeffercart.github.io/audios/", "_top");} //audio
    else if (pagina == 3) {
               window.open("https://jeffercart.github.io/ojos/", "_top");}//ojos
    }
}

function drawScene() {
  lights();
  //pointLight(255, 255, 255, 2000, -4000, 1000);
  pointLight(255, 255, 255, 0, -4000, 2000);
  //wpointLight(255, 255, 255, 1000, -4000, 2000);
  pointLight(255, 255, 255, 2000, -4000, 2000);

  //FOR PISO
  for (let i = 0; i <= 2000; i += 1000) {
    for (let a = 0; a <= 2000; a += 1000) {
      push();
      fill(200, 255, 200);
      noStroke();
      texture(piso);
      translate(a, 200, i);
      rotateX(PI / 2);
      plane(1000);
      pop();
    }
  }

  // imagen 1
  push();
  noStroke();
  texture(a1);
  translate(200, -100, 700);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a1t);
  translate(360, -55, 700);
  plane(100);
  pop();

  //imagen 2
  push();
  noStroke();
  texture(a2);
  translate(200, -100, 1200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a2t);
  translate(40, -55, 1200);
  plane(100);
  pop();

  // imagen 3
  push();
  noStroke();
  texture(a3);
  translate(700, -100, 700);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a3t);
  translate(860, -55, 700);
  plane(100);
  pop();

  // imagen 4
  push();
  noStroke();
  texture(a4);
  translate(700, -100, 1200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a4t);
  translate(540, -55, 1200);
  plane(100);
  pop();

  // imagen 5
  push();
  noStroke();
  texture(a5);
  translate(1200, -100, 700);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a5t);
  translate(1360, -55, 700);
  plane(100);
  pop();

  // imagen 6
  push();
  noStroke();
  texture(a6);
  translate(1200, -100, 1200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a6t);
  translate(1040, -55, 1200);
  plane(100);
  pop();

  // imagen 7
  push();
  noStroke();
  texture(a7);
  translate(1700, -100, 700);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a7t);
  translate(1860, -55, 700);
  plane(100);
  pop();

  // imagen 8
  push();
  noStroke();
  texture(a8);
  translate(1700, -100, 1200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a8t);
  translate(1540, -55, 1200);
  plane(100);
  pop();

  // imagen 9
  push();
  noStroke();
  texture(a9);
  translate(2200, -100, 1200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a9t);
  translate(2040, -55, 1200);
  plane(100);
  pop();

  // imagen 10
  push();
  noStroke();
  texture(a0);
  translate(2200, -100, 700);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a0t);
  translate(2360, -55, 700);
  plane(100);
  pop();

  // imagen 11
  push();
  noStroke();
  texture(a10);
  translate(2200, -100, 200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a10t);
  translate(2040, -55, 200);
  plane(100);
  pop();

  // imagen 12
  push();
  noStroke();
  texture(a11);
  translate(1700, -100, 200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a11t);
  translate(1540, -55, 200);
  plane(100);
  pop();

  // imagen 13
  push();
  noStroke();
  texture(a12);
  translate(1200, -100, 200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a12t);
  translate(1040, -55, 200);
  plane(100);
  pop();

  // imagen 14
  push();
  noStroke();
  texture(a13);
  translate(700, -100, 200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a13t);
  translate(540, -55, 200);
  plane(100);
  pop();

  // imagen 15
  push();
  noStroke();
  texture(a14);
  translate(200, -100, 200);
  plane(200);
  pop();
  //texto
  push();
  noStroke();
  texture(a14t);
  translate(40, -55, 200);
  plane(100);
  pop();

  //imagen techo
  push();
  fill(200, 255, 200);
  noStroke();
  texture(ojo);
  translate(0, -2700, 0);
  rotateX(PI / 2);
  plane(1000);
  pop();
}

function mouseClicked() {
  if (mouseButton == LEFT){
  fondo.setVolume(0.08);
  fondo.loop();
  }
}

function firstPerson(cam){
  cam.firstPersonState = cam.firstPersonState || {
    azimuth: -atan2(cam.eyeZ - cam.centerZ, cam.eyeX - cam.centerX),
    zenith: -atan2(cam.eyeY - cam.centerY, dist(cam.eyeX, cam.eyeZ, cam.centerX, cam.centerZ)),
    lookAtDist: dist(cam.eyeX, cam.eyeY, cam.eyeZ, cam.centerX, cam.centerY, cam.centerZ),
    mousePrevX: mouseX,
    mousePrevY: mouseY
  }
  
  // Look around controls
  cam.firstPersonState.azimuth -= (mouseX - cam.firstPersonState.mousePrevX) / 100;
  if(abs(cam.firstPersonState.zenith + (mouseY - cam.firstPersonState.mousePrevY) / 100) < PI/2) cam.firstPersonState.zenith += (mouseY - cam.firstPersonState.mousePrevY) / 100;
  
  // Movement controls
  if(keyIsPressed && keyCode == 87 || keyIsDown(UP_ARROW)){
    cam.eyeX -= 10 * cos(cam.firstPersonState.azimuth)
    cam.eyeZ += 10 * sin(cam.firstPersonState.azimuth)
  }
  if(keyIsPressed && keyCode == 83 || keyIsDown(DOWN_ARROW)){
    cam.eyeX += 10 * cos(cam.firstPersonState.azimuth)
    cam.eyeZ -= 10 * sin(cam.firstPersonState.azimuth)
  }
  if(keyIsPressed && keyCode == 65 || keyIsDown(LEFT_ARROW)){
    cam.eyeX -= 10 * cos(cam.firstPersonState.azimuth + PI/2)
    cam.eyeZ += 10 * sin(cam.firstPersonState.azimuth + PI/2)
  }
  if(keyIsPressed && keyCode == 68 || keyIsDown(RIGHT_ARROW)){
    cam.eyeX += 10 * cos(cam.firstPersonState.azimuth + PI/2)
    cam.eyeZ -= 10 * sin(cam.firstPersonState.azimuth + PI/2)
  }
  
  // Update previous mouse position
  cam.firstPersonState.mousePrevX = mouseX;
  cam.firstPersonState.mousePrevY = mouseY;
  
  // Update the look-at point
  cam.centerX = cam.eyeX - cam.firstPersonState.lookAtDist * cos(cam.firstPersonState.zenith) * cos(cam.firstPersonState.azimuth);
  cam.centerY = cam.eyeY + cam.firstPersonState.lookAtDist * sin(cam.firstPersonState.zenith);
  cam.centerZ = cam.eyeZ + cam.firstPersonState.lookAtDist * cos(cam.firstPersonState.zenith) * sin(cam.firstPersonState.azimuth);
  
  // Call the built in p5 function 'camera' to position and orient the camera
  camera(cam.eyeX, cam.eyeY, cam.eyeZ,  // position
         cam.centerX, cam.centerY, cam.centerZ,  // look-at
         0, 1, 0)  // up vector
}

function botonDerecho(event) {
  // Evitar que aparezca el menú contextual del botón derecho del mouse
  event.preventDefault();

  // cuando se hace clic con el botón derecho pagina cambia por un numero random entero entre 1 y 3
  pagina = floor(random(4));
}
