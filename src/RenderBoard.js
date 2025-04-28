export { RenderBoard };

function RenderBoard(cells, board, isPlayerBoard) {
  if (isPlayerBoard) {
    //Show ships
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const index = row * 10 + col;
        const cell = cells[index];
        const value = board[col][row];

        //Clear previous classes
        cell.className = "";
        cell.classList.add("cell");

        //Always set the dataset attributes

        cells[index].dataset.row = row;
        cells[index].dataset.col = col;

        if (value === ".") {
          //empty water
        } else if (value === "X") {
          cell.classList.add("miss");
        } else if (value === "O") {
          cell.classList.add("hit");
        } else {
          //This is a ship
          if (isPlayerBoard) {
            cell.classList.add("has-ship");
          } else {
            cell.classList.add("fogged");
            //If enemy board, hide ships!
          }
        }
      }
    }
  }
}
