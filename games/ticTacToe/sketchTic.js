const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

const boardSize = 3; 
const cellSize = 120; 
const padding = 30; 
const titleHeight = 70; 
canvas.width = cellSize * boardSize + padding * 2;
canvas.height = cellSize * boardSize + padding * 2 + titleHeight; 

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X'; 
let gameOver = false; 

function drawBackground() {
  ctx.fillStyle = "#D2B48C"; 
  ctx.fillRect(0, 0, canvas.width, canvas.height); 
}


function drawTitle() {
  ctx.font = "40px 'Pacifico', cursive"; 
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#000000"; 
  ctx.fillText("Tic Tac Toe", canvas.width / 2, padding); 

  ctx.strokeStyle = "#000000"; 
  ctx.lineWidth = 2; 
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 100, padding + 45); 
  ctx.lineTo(canvas.width / 2 + 100, padding + 45); 
  ctx.stroke();
}

function drawGrid() {
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4; 

  const startX = padding;
  const startY = padding + titleHeight;

  for (let i = 1; i < boardSize; i++) {
    ctx.beginPath();
    ctx.moveTo(startX + i * cellSize, startY); 
    ctx.lineTo(startX + i * cellSize, startY + cellSize * boardSize);
    ctx.stroke();
  }

  for (let i = 1; i < boardSize; i++) {
    ctx.beginPath();
    ctx.moveTo(startX, startY + i * cellSize); 
    ctx.lineTo(startX + cellSize * boardSize, startY + i * cellSize);
    ctx.stroke();
  }
}

function drawMarks() {
  ctx.font = "60px Arial"; 
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#FFFFFF"; 

  const startX = padding;
  const startY = padding + titleHeight;

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = board[row][col];
      if (cell) {
        ctx.fillText(
          cell,
          startX + col * cellSize + cellSize / 2,
          startY + row * cellSize + cellSize / 2
        );
      }
    }
  }
}

function draw() {
  drawBackground(); 
  drawTitle();      
  drawGrid();       
  drawMarks();      
}

function getMove() {
  if (gameOver) return; 

  const move = prompt(`Player ${currentPlayer}, enter your move (row,col) from 1 to 3 (e.g., 1,1 for the top-left corner):`);
  if (move) {
    const [row, col] = move.split(',').map(Number);

    if (row >= 1 && row <= 3 && col >= 1 && col <= 3 && board[row - 1][col - 1] === '') {
      board[row - 1][col - 1] = currentPlayer; 
      draw(); 

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setTimeout(() => {
        checkWinner(); 
        if (!gameOver) {  
          getMove(); 
        }
      }, 100); 
    } else {
      alert("Invalid move or cell already taken. Try again.");
      getMove(); 
    }
  }
}

function checkWinner() {

  for (let i = 0; i < boardSize; i++) {

    if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      draw(); 
      alert(`${board[i][0]} wins!`);
      gameOver = true; 
      return;
    }

    if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      draw(); 
      alert(`${board[0][i]} wins!`);
      gameOver = true; 
      return;
    }
  }

  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    draw(); 
    alert(`${board[0][0]} wins!`);
    gameOver = true; 
    return;
  }
  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    draw(); 
    alert(`${board[0][2]} wins!`);
    gameOver = true; 
    return;
  }

  if (board.flat().every(cell => cell)) {
    draw(); 
    alert("It's a draw!");
    gameOver = true; 
  }
}

draw(); 

setTimeout(() => {
  getMove(); 
}, 3000); 