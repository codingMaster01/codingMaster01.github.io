let board = [
  ["white", "white", "white", "white", "white", "white"],
  ["white", "white", "white", "white", "white", "white"],
  ["white", "white", "white", "white", "white", "white"],
  ["white", "white", "white", "white", "white", "white"],
  ["white", "white", "white", "white", "white", "white"],
  ["white", "white", "white", "white", "white", "white"],
  ["white", "white", "white", "white", "white", "white"],
];
let turn = 0;
let players = ["red", "yellow"];

function dropToken(column) {
  for (let i = 5; i >= 0; i--) {
    if (staleMate() === true) {
      break;
    }
    if (winner() === true || winner() === false) {
      break;
    }
    if (board[column][i] === "white") {
      board[column][i] = players[turn % 2];
      turn++;
      break;
    }
  }
}
function setup() {
  createCanvas(480, 500);
}

function draw() {
  background(0, 0, 255);
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      fill(board[c][r]);
      circle(c * 70 + 30, r * 70 + 30, 50);
    }
  }
  if (players[turn % 2] === "red") {
    if (winner() === false) {
      if (staleMate() === true) {
        fill(0, 0, 120);
        rect(90, 430, 300, 50);
        textSize(32);
        fill(0, 0, 255);
        text("Yellow Wins!", 160, 470);
      } else {
        fill(0, 0, 120);
        rect(90, 430, 300, 50);
        textSize(32);
        fill(0, 0, 255);
        text("Yellow Wins!", 160, 470);
      }
    }
    if (staleMate() === true && winner() !== false) {
      fill(0, 0, 120);
      rect(90, 430, 300, 50);
      textSize(32);
      fill(0, 0, 255);
      text("Stale Mate!", 160, 470);
    }
    if (staleMate() !== true && winner() !== false) {
      fill("red");
      rect(90, 430, 300, 50);
      textSize(32);
      fill(255, 255, 0);
      text("It's Red's Turn!", 130, 470);
    }
  }
  if (players[turn % 2] === "yellow") {
    if (winner() === true) {
      if (staleMate() === true) {
        fill(0, 0, 120);
        rect(90, 430, 300, 50);
        textSize(32);
        fill(0, 0, 255);
        text("Red Wins!", 160, 470);
      } else {
        fill(0, 0, 120);
        rect(90, 430, 300, 50);
        textSize(32);
        fill(0, 0, 255);
        text("Red Wins!", 160, 470);
      }
    }
    if (staleMate() === true && winner() !== true) {
      fill(0, 0, 120);
      rect(90, 430, 300, 50);
      textSize(32);
      fill(0, 0, 255);
      text("Stale Mate!", 160, 470);
    }
    if (staleMate() !== true && winner() !== true) {
      fill("yellow");
      rect(90, 430, 300, 50);
      textSize(32);
      fill(255, 0, 0);
      text("It's Yellow's Turn!", 120, 470);
    }
  }
}
function mousePressed() {
  if (mouseX > 0 && mouseX < 480 / 7 && mouseY < 430) {
    dropToken(0);
  }
  if (mouseX > 480 / 7 && mouseX < (480 / 7) * 2 && mouseY < 430) {
    dropToken(1);
  }
  if (mouseX > (480 / 7) * 2 && mouseX < (480 / 7) * 3 && mouseY < 430) {
    dropToken(2);
  }
  if (mouseX > (480 / 7) * 3 && mouseX < (480 / 7) * 4 && mouseY < 430) {
    dropToken(3);
  }
  if (mouseX > (480 / 7) * 4 && mouseX < (480 / 7) * 5 && mouseY < 430) {
    dropToken(4);
  }
  if (mouseX > (480 / 7) * 5 && mouseX < (480 / 7) * 6 && mouseY < 430) {
    dropToken(5);
  }
  if (mouseX > (480 / 7) * 6 && mouseX < 480 && mouseY < 430) {
    dropToken(6);
  }
}

function winner() {
  let reWinner = "red";
  let yellWinner = "yellow";
  let r = random(185, 255);
  let g = random(185, 255);
  let b = random(185, 255);
  for (let c = 0; c < 7; c++) {
    for (let r = 0; r < 6; r++) {
      if (
        r <= 2 &&
        board[c][r] === reWinner &&
        board[c][r + 1] === reWinner &&
        board[c][r + 2] === reWinner &&
        board[c][r + 3] === reWinner
      ) {
        frameRate(3);
        fill(r, g, b);
        for (let f = 0; f < 4; f++) {
          circle(c * 70 + 30, (r + f) * 70 + 30, 50);
        }
        return true;
      }
      if (
        c <= 3 &&
        board[c][r] === reWinner &&
        board[c + 1][r] === reWinner &&
        board[c + 2][r] === reWinner &&
        board[c + 3][r] === reWinner
      ) {
        frameRate(3);
        fill(r, g, b);
        for (let f = 0; f < 4; f++) {
          circle((c + f) * 70 + 30, r * 70 + 30, 50);
        }
        return true;
      }
      if (
        r <= 2 &&
        board[c][r] === yellWinner &&
        board[c][r + 1] === yellWinner &&
        board[c][r + 2] === yellWinner &&
        board[c][r + 3] === yellWinner
      ) {
        frameRate(3);
        fill(r, g, b);
        for (let f = 0; f < 4; f++) {
          circle(c * 70 + 30, (r + f) * 70 + 30, 50);
        }
        return false;
      }
      if (
        c <= 3 &&
        board[c][r] === yellWinner &&
        board[c + 1][r] === yellWinner &&
        board[c + 2][r] === yellWinner &&
        board[c + 3][r] === yellWinner
      ) {
        frameRate(3);
        fill(r, g, b);
        for (let f = 0; f < 4; f++) {
          circle((c + f) * 70 + 30, r * 70 + 30, 50);
        }
        return false;
      }
      if (
        (r <= 2) & (c <= 3) &&
        board[c][r] === reWinner &&
        board[c + 1][r + 1] === reWinner &&
        board[c + 2][r + 2] === reWinner &&
        board[c + 3][r + 3] === reWinner
      ) {
        frameRate(3);
        fill(r, g, b);
        for (let f = 0; f < 4; f++) {
          circle((c + f) * 70 + 30, (r + f) * 70 + 30, 50);
        }
        return true;
      }
      if (
        r <= 2 &&
        c <= 3 &&
        board[c][r] === yellWinner &&
        board[c + 1][r + 1] === yellWinner &&
        board[c + 2][r + 2] === yellWinner &&
        board[c + 3][r + 3] === yellWinner
      ) {
        frameRate(3);
        fill(r, g, b);
        for (let f = 0; f < 4; f++) {
          circle((c + f) * 70 + 30, (r + f) * 70 + 30, 50);
        }
        return false;
      }
      if (
        r <= 3 &&
        c >= 3 &&
        board[c][r] === yellWinner &&
        board[c - 1][r + 1] === yellWinner &&
        board[c - 2][r + 2] === yellWinner &&
        board[c - 3][r + 3] === yellWinner
      ) {
        frameRate(3);
        fill(r, g, b);
        for (let w = 0; w < 4; w++) {
          for (let f = 0; f < 4; f++) {
            circle((c - f) * 70 + 30, (r + f) * 70 + 30, 50);
          }
        }
        return false;
      }
      if (
        c >= 3 &&
        board[c][r] === reWinner &&
        board[c - 1][r + 1] === reWinner &&
        board[c - 2][r + 2] === reWinner &&
        board[c - 3][r + 3] === reWinner
      ) {
        frameRate(3);
        fill(r, g, b);
        for (let w = 0; w < 4; w++) {
          for (let f = 0; f < 4; f++) {
            circle((c - f) * 70 + 30, (r + f) * 70 + 30, 50);
          }
        }
        return true;
      }
    }
  }
}
function staleMate() {
  let puppets101khanacademy = "white";
  if (
    board[0][0] !== puppets101khanacademy &&
    board[1][0] !== puppets101khanacademy &&
    board[2][0] !== puppets101khanacademy &&
    board[3][0] !== puppets101khanacademy &&
    board[4][0] !== puppets101khanacademy &&
    board[5][0] !== puppets101khanacademy &&
    board[6][0] !== puppets101khanacademy
  ) {
    return true;
  }
}
