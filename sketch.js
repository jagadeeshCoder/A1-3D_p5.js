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
  joystick()

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

function joystick(){
  button = createButton('left');
  button.position(30, 350);
  button.size(100,50);
  button.mousePressed(left);
  
  button1 = createButton('right');
  button1.position(230, 350);
  button1.size(100,50);
  button1.mousePressed(right);
  
  button2 = createButton('back');
  button2.position(130, 400);
  button2.size(100,50);
  button2.mousePressed(back);
  
  button3 = createButton('frent');
  button3.position(130, 298);
  button3.size(100,50);
  button3.mousePressed(frent);
  
  button4 = createButton('jump');
  button4.position(800, 400);
  button4.size(100,50);
  button4.mousePressed(jump);

}
