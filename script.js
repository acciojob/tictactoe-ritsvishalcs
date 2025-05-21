//your JS code here. If required.
let player1 = '';
let player2 = '';
let currentPlayer = '';
let currentSymbol = 'X';
let board = Array(9).fill('');

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8], // Rows
  [0,3,6],[1,4,7],[2,5,8], // Columns
  [0,4,8],[2,4,6]          // Diagonals
];

document.getElementById("submit").addEventListener("click", function () {
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();

  if (!player1 || !player2) return;

  // Hide input fields, show game board
  document.getElementById("game").style.display = "block";
  document.getElementById("submit").style.display = "none";
  document.getElementById("player1").style.display = "none";
  document.getElementById("player2").style.display = "none";

  // Set initial message
  currentPlayer = 'x';
  currentName = player1;
  otherName = player2;
  document.querySelector(".message").textContent = `${currentName}, you're up`;

  // Store for later use
  window.ticTacToe = {
    players: { x: player1, o: player2 },
    current: 'x'
  };
});

function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    currentSymbol = 'O';
  } else {
    currentPlayer = player1;
    currentSymbol = 'X';
  }
  document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
}

function checkWinner() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[b] === board[c];
  });
}
