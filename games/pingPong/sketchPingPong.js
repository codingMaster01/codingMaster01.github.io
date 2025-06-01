let x = 0;
let y = 0;
let ballm = 300;
let balln = 200;
let peed = 4;
let vel = 3;
let score1 = 0
let score2 = 0
let right = 4
let left = -4

function setup() {
  createCanvas(600,400);
  noLoop();
  vel = random(-3,3)
}
function draw() {
  background(20,0,120);
  stroke(255,255,255);
  strokeWeight(4);
  line(300,0,300,400);
  stroke(255,255,255);
  strokeWeight(8)
  line(0,0,600,0);
  line(0,0,0,400);
  line(600,0,600,400);
  line(0,400,600,400);
  stroke(0,0,255);
  strokeWeight(2);
  fill(255,255,255);
  rect(15,x,5,75);
  stroke(255,0,0);
  strokeWeight(2);
  rect(580,y,5,75);
  if (ballm > 300){
    circle,stroke(255,255,255);
    circle,strokeWeight(3);
    circle,fill(255,0,0);
  }
  if (ballm < 300){
    circle,stroke(255,255,255);
    circle,strokeWeight(3);
    circle,fill(0,0,255);
  }
  if (ballm == 300) {
    stroke(255,255,255)
    strokeWeight(3)
    fill(0,0,255)
  }
  if (ballm < 0 || ballm > 600) {
    noLoop()
  }
  if (x > 330) {
    x = x - 10
  }
  if (y > 330) {
    y = y - 10
  }
  ballm = ballm + peed;
  balln = balln + vel;
  if (balln > height) {
    vel = vel * -1
  }
  if (balln < 0) {
    vel = vel * -1
  }
 if (balln > x - 1 && 
        balln < x + 76 && 
        ballm < 20 &&
        ballm > 15 ) {
    peed = peed * -1;
    vel = random(-3,3);
  }
    if (balln > y - 1 &&
      balln < y + 76 &&
      ballm > 580 &&
      ballm < 585) {
    peed = peed * -1
    vel = random(-3,3)
  }
    circle(ballm,balln,30)
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 10;
  }
  if (keyIsDown(UP_ARROW)) {
    y = y - 10;
  }
  if(keyIsDown(87)){
    x = x - 10;
  }
  if(keyIsDown(83)) {
    x = x + 10;
  }
  if (x > 525) {
    x = x - 10;
  
  }
  if(x < 0) {
    x = x + 10;
  }
  if(y > 425){
    y = y - 10;
  }
  if(y < 0) {
    y = y + 10;
  }  
  textSize(32)
  text('PiNg pONg',220,30);
  fill(0,0,255);
  textSize(20);
  text('Player 1', 6,390);
  fill(255,0,0);
  textSize(20);
  text('Player 2', 520,390);
  if (ballm > 600) {
    score1 = score1 + 1
  }
  if (ballm < 0) {
    score2 = score2 + 1
  }
  fill(255,255,255)
  textSize(30)
  text('' + score1,270,390)
  textSize(30)
  text('' + score2,315,390)
  if (score1 == 7) {
    fill(0,0,255);
    textSize(40);
    text('You Win', 100,200)
    fill(255,0,0)
    textSize(40);
    text('You Lost',350,200)
  }
  if(score2 == 7) {
    fill(0,0,255);
    textSize(40);
    text('You Lost', 100,200)
    fill(255,0,0)
    textSize(40);
    text('You Win',350,200)
  }
  if (score1 == 7 || score2 == 7) {
    score1 = 0
    score2 = 0
  }
  
   if (ballm < -1 || ballm > 601) {
    noLoop();
    ballm = 300
    balln = 200
    vel = random(-3,3)
  }
}
function mousePressed() {
    loop();
  if (ballm > 600 || ballm < 0) {
      vel = random(-5,5)
  }
}

  //w = 87
  //s = 83