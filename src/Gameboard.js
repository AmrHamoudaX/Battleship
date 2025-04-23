export { Gameboard };
import { CreateBoard } from "./CreateBoard";
function Gameboard() {
  //Creates 10x10 board
  const board = CreateBoard(10);
  const fleet = [];

  function placeShip(ship, x, y, direction) {
    fleet.push(ship);
    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        board[x][y + i] = ship;
      } else if (direction === "vertical") {
        board[x + i][y] = ship;
      }
    }
  }

  function attack(x, y) {
    const hitsCoordinates = [];
    //Already attacked coordinates
    if (board[x][y] === "X" || board[x][y] === "O") return;

    // O if ship is hit and X if it's a miss
    if (board[x][y] !== ".") {
      board[x][y].hit();
      hitsCoordinates.push([x, y]);
      board[x][y] = "O";
    } else {
      board[x][y] = "X";
    }
  }

  function missedAttks() {
    const newArr = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === "X") {
          newArr.push([i, j]);
        }
      }
    }
    return newArr;
  }

  function Defeated() {
    const checkDefeated = fleet.every((ship) => ship.isSunk() === true);
    return checkDefeated;
  }

  return { board, placeShip, attack, missedAttks, Defeated };
}
