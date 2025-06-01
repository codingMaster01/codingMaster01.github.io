//Variable Related To The Events After Game
let restartButtonImg;
let endGame = false;
let hitWall = false
let hitTail = false
let hit = false;
//Variables Related To Page And Time
let pageNumber = 0
let timeG = 1000;
let timeFactor = 1000;
//Board Layout
let snakeBoard = [
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
  [
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
  ],
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
  [
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
  ],
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
  [
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
  ],
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
  [
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
  ],
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
  [
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
  ],
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
  [
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
  ],
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
  [
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
  ],
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
  [
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
  ],
  [
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
    "green",
    "lightgreen",
  ],
];
//Variables Related To Snakes
let snakeX = [0, 1, 2, 3, 4];
let snakeY = [8, 8, 8, 8, 8];
let newTailX = 0;
let newTailY = 0;
let direction = -1;
//Variables Related To Apples
let appleX = 8;
let appleY = 2;
let score = 0;
let appleXP = [];
let appleYP = [];
let deployApptimeFactor = 0.5
//Generating Random Apple Locations
for (let x = 0; x < 17 * 17; x++) {
  let numX = Math.floor(Math.random() * 17);
  appleXP.push(numX);

  let numY = Math.floor(Math.random() * 17);
  appleYP.push(numY);
}

//Uploading Image Of Restart Button
function preload() {
  restartButtonImg = loadImage("assetsSnake/RESTART_BUTTON.png");
  //This restart button came from iconduck.com
}

function setup() {
  createCanvas(600, 620);
  //Setting The Snake In Movement
  setInterval(snakeMovement, 170);
}

//The Function That Moves The Snake
function snakeMovement() {
  //Used To Determine Direction Of Snake
  if (pageNumber === -1) {
  if (direction !== 0) {
    if (direction !== 2) {
      if (keyIsDown(RIGHT_ARROW)) {
        direction = 1;
      }
    }
    if (direction !== -1) {
    if (direction !== 1) {
      if (keyIsDown(LEFT_ARROW)) {
        direction = 2;
      }
    }
    }
    if (direction !== 4) {
      if (keyIsDown(UP_ARROW)) {
        direction = 3;
      }
    }
    if (direction !== 3) {
      if (keyIsDown(DOWN_ARROW)) {
        direction = 4;
      }
    }
  }
  }
  //Used To Give Effect Of Snake Moving
  if (direction !== -1) {
    let rowX = snakeX[snakeX.length - 1];
    let colY = snakeY[snakeY.length - 1];

    if (hit === false) {
      if (direction === 1) {
        rowX++;
      }
      if (direction === 2) {
        rowX--;
      }

      if (direction === 3) {
        colY--;
      }

      if (direction === 4) {
        colY++;
      }
      snakeX.push(rowX);
      snakeY.push(colY);
      snakeX.shift();
      snakeY.shift();
    }
  }
  
  //To Check If Snake Hit The Wall
  if (
    snakeX[snakeX.length - 1] === 17 ||
    (direction !== 1 && snakeX[snakeX.length - 1] === -1) ||
    snakeY[snakeY.length - 1] === -1 ||
    snakeY[snakeY.length - 1] === 17
  ) {
    hit = true;
    direction = 0;
    endGame = true;
    hitWall = true
  }
  //To Check If Snake Hit Its Own Tail
  for (let x = snakeX.length - 2; x >= 0; x--) {
    if (
      snakeX[snakeX.length - 1] === snakeX[x] &&
      snakeY[snakeY.length - 1] === snakeY[x]
    ) {
      hit = true;
      direction = 0;
      endGame = true;
      hitTail = true
    }
  }
}

//The Function That Creates The Board
function createBoard(board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      noStroke();
      fill(snakeBoard[x][y]);
      rect(x * 27 + 65, y * 27 + 140, 27, 27);
    }
  }
}

//The Function That Creates The Snake
function createSnake(snakeX, snakeY) {
  for (let x = 0; x < snakeX.length; x++) {
    fill(0, 0, 255);
    stroke(0);
    rect(27 * snakeX[x] + 65, 27 * snakeY[x] + 140, 27, 27);
  }
}

//Function That Grows The Snake
function growSnake(num) {
  for (let x = 0; x < num; x++) {
    if (direction === 1) {
      newTailX = snakeX[0] - 1;
      newTailY = snakeY[0];
    }
    if (direction === 2) {
      newTailX = snakeX[0] + 1;
      newTailY = snakeY[0];
    }
    if (direction === 3) {
      newTailX = snakeX[0];
      newTailY = snakeY[0] + 1;
    }
    if (direction === 4) {
      newTailX = snakeX[0];
      newTailY = snakeX[0] - 1;
    }
  }
  snakeX.unshift(newTailX);
  snakeY.unshift(newTailY);
}

//Function That Creates Random Apples If They Are Eaten
function createApples() {
  fill(255, 0, 0);
  noStroke();
  for (let x = 0; x < snakeX.length; x++) {
    if (
      snakeX[snakeX.length - 1] === appleX &&
      snakeY[snakeY.length - 1] === appleY
    ) {
      if (appleXP[0] !== snakeX[x]) {
        appleX = appleXP[0];
        appleXP.shift();
      }
      if (appleYP[0] !== snakeY[x]) {
        appleY = appleYP[0];
        appleYP.shift();
      }
      score++;
      //Calling The Function To Grow Snake
      growSnake(score);
    }
  }
  //Making The New Apple
  rect(27 * appleX + 65, 27 * appleY + 140, 27, 27);
}

//Function That Tells The User Their Results
function results(condition, appleX, appleY) {
  for (let x = 0; x < appleX.length; x++) {
    if (x < appleX.length/4) {
      rotate(PI/30)
    }
    if (x > appleX.length/4 && x < 2 * appleX.length/4) {
      rotate(PI)
    }
    if (x > 2 * appleX.length/4) {
      rotate(-PI/30)
    }
    deployApptimeFactor = deployApptimeFactor + 0.005
    noStroke()
    fill(255, 0, 0)
    circle(27 * appleX[x], 27 * appleY[x] + deployApptimeFactor, 27)
    fill("black")
    strokeWeight(4)
    stroke(0)
    rect(27 * appleX[x] + 13, 27 * appleY[x] + deployApptimeFactor, 2, 5)
  }
  strokeWeight(4)
  resetMatrix()
  noStroke()
  strokeCap(ROUND);
  fill(0, 255, 0, 100);
  rect(120, 220, 360, 250, 50);
  fill("darkgreen");
  stroke(255);
  if (condition === "Wall") {
    text("The Snake Hit The Wall", 130, 270)
  }
  if (condition === "Tail") {
    textSize(30)
    text("The Snake Hit Its Own Tail", 125, 270)
  }
  textSize(32)
  text("Your Final Score: " + score, 160, 310);
  image(restartButtonImg, 250, 335, 100, 100);
}

function draw() {
  noStroke();
  background(0);
  //Design Of The Background
  fill(0, 255, 0, 65);
  circle(60, 60, 80);
  fill(255, 0, 0, 65);
  circle(160, 360, 80);
  fill(0, 0, 255, 65);
  circle(360, 120, 40);
  fill(255, 255, 0, 65);
  circle(210, 180, 120);
  fill(0, 255, 255, 65);
  circle(540, 80, 90);
  fill(150, 100, 200, 65);
  circle(440, 300, 150);
  fill(180, 180, 120, 65);
  circle(380, 440, 100);
  fill(80, 30, 50, 70);
  circle(0, 480, 80);
  fill(255, 0, 255, 65);
  circle(10, 250, 80);
  fill(255, 255, 255, 65);
  circle(560, 430, 80);
  fill(100, 200, 255, 65);
  circle(300, 30, 80);
  fill(0, 220, 120, 65);
  circle(210, 470, 60);
  //Design Of The Title
  fill(0, 255, 0, 255);
  textSize(50);
  strokeWeight(4);
  stroke("green");
  line(210, 65, 380, 65);
  text("SNAKE", 210, 60);
  
  //Instructions Page
  if (pageNumber === 0) {
    fill(0, 255, 0, 70);
    rect(115, 120, 365, 440, 50);
    stroke(200)
    textSize(40)
    fill("darkgreen")
    text("Instructions: ", 190, 168)
    textSize(30)
    noStroke()
    fill(255)
    text("Press The Arrow Keys", 150, 225)
    text("To Move The Snake", 160, 255)
    text("Feed The Snake Apples", 140, 300)
    text("To Grow Its Tail", 195, 330)
    text("If The Snake Hits The Wall", 120, 375)
    text("Or Its Own Tail, The Game", 120, 405)
    text("Will Be Over", 215, 435)
    text("To Begin Playing, Click", 140, 480)
    text("The Screen", 220, 514)
  }
  //Gameplay Page
  if (pageNumber === -1) {
  noStroke();
  fill(0, 255, 0, 255);
  textSize(32);
  text("Apples Eaten: " + score, 180, 120);
  createBoard(snakeBoard);

  createSnake(snakeX, snakeY);

  createApples();
  //Checking To See If Game Should End
  if (endGame === true && hitWall === true) {
    results("Wall", appleXP, appleYP);
  }
  if (endGame === true && hitTail === true) {
    results("Tail", appleXP, appleYP)
  }
}
}
function mouseClicked() {
  //Allows User To Move Past The Instructions
  if (pageNumber === 0) {
    pageNumber = -1
  }
  //Allows The Game To Reset If User Clicks The Image of The Restart Button
  if (endGame === true) {
    if (mouseX > 250 && mouseX < 350 && mouseY > 320 && mouseY < 420) {
      endGame = false;
      snakeX = [0, 1, 2, 3, 4];
      snakeY = [8, 8, 8, 8, 8];
      direction = 1;
      appleX = 8;
      appleY = 2;
      appleXP = [];
      appleYP = [];
      score = 0;
      hitWall = false
      hitTail = false
      deployApptimeFactor = 0.5
      for (let x = 0; x < 17 * 17; x++) {
        let numX = Math.floor(Math.random() * 17);
        appleXP.push(numX);

        let numY = Math.floor(Math.random() * 17);
        appleYP.push(numY);
      }
      hit = false;
      timeG = timeG + timeFactor;
      timeFactor = timeFactor + 500;
      //Sets Snake Into Movement
//Need To Improve Speed Due To Inconsistency In Mouseclicked
      setInterval(snakeMovement, 170 + timeG);
    }
  }
}