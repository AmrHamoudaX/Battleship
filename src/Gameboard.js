export { Gameboard };
import { CreateBoard } from "./CreateBoard";
function Gameboard() {
  //Creates 10x10 board
  const board = CreateBoard(10);

  function placeShip(ship, x, y, direction) {
    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        board[x][y + i] = ship;
      } else if (direction === "vertical") {
        board[x + i][y] = ship;
      }
    }
  }

  return { board, placeShip };
}
