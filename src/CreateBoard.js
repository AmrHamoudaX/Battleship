export { CreateBoard };

function CreateBoard(gridSize) {
  const board = [];

  for (let i = 0; i < gridSize; i++) {
    board[i] = [];
    for (let j = 0; j < gridSize; j++) {
      board[i][j] = ".";
    }
  }
  return board;
}
