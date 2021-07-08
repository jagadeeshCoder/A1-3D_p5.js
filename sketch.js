var terrain
var x = 50
var y = 50
var z = 50
let img
let scrolling
var cam

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  //img = loadImage('texture/texturemap1024.png');

  cam = createCamera();
}

function draw() {
  background(220);

  game_camer()

  push();
  translate(-100, -100);
  rotateX(- PI / 1.5);
  noStroke() 
  debugMode(GRID, 100000, 1000, 0, 80, 0);
  //terrain = plane(200000.00, 200000.00);
  pop();

  push();
  translate(x,y)
  box(50,50)
  controls();
  scrolling = 0
  pop();

  orbitControl()
}


function controls() {
  if (keyCode == UP_ARROW) {
   x -= 10;
    scrolling += 3;
  }
  if (keyCode == DOWN_ARROW) {
    x += 10;
    scrolling += 3;
  }
  if (keyCode == LEFT_ARROW) {
    z += 10;
    scrolling -= 3;
  }
  if (keyCode == RIGHT_ARROW) {
    z -= 10;
    scrolling += 5;
  }
}

function frent(){
   x -= 8;
    scrolling += 3;
}

function back(){
  x += 8;
    scrolling += 3;
}

function left(){
   z += 5;
    scrolling -= 3;
}

function right(){
   z -= 5;
    scrolling += 5;
}

function jump(){
  y -= 140;
   y += 140;
  scrolling +=5;
}

function game_camer(){
  push()
  cam.lookAt(x, y, z);
               // frent/back,up/down
  cam.setPosition(190 + x,y - 5, mouseX-mouseY, 500,100);
                //400,1,0,500}
  pop()
}
