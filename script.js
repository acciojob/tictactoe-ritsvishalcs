let player1 = '';
let player2 = '';
let currentPlayer = '';
let currentSymbol = 'X';
let board = Array(9).fill('');

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

document.getElementById("submit").addEventListener("click", function () {
  player1 = document.getElementById("player1").value.trim();
  player2 = document.getElementById("player2").value.trim();

  if (!player1 || !player2) return;

  document.getElementById("game").style.display = "block";
  document.getElementById("submit").style.display = "none";
  document.getElementById("player1").style.display = "none";
  document.getElementById("player2").style.display = "none";

  currentPlayer = player1;
  currentSymbol = 'X';
  document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
});

function checkWinner() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[b] === board[c];
  });
}

document.querySelectorAll('.cell').forEach((cell, index) => {
  cell.addEventListener('click', function () {
    if (board[index] || checkWinner()) return;

    board[index] = currentSymbol;
    cell.textContent = currentSymbol;

    if (checkWinner()) {
      document.querySelector(".message").textContent = `${currentPlayer} congratulations you won!`;
      return;
    }

    if (!board.includes('')) {
      document.querySelector(".message").textContent = `It's a draw!`;
      return;
    }

    if (currentPlayer === player1) {
      currentPlayer = player2;
      currentSymbol = 'O';
    } else {
      currentPlayer = player1;
      currentSymbol = 'X';
    }

    document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
  });
});

