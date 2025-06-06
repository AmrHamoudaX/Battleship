export { CreateUiGrid };
import { CreateBoard } from "./CreateBoard";
function CreateUiGrid() {
  const gridSize = CreateBoard(10).length;

  const myBoard = document.querySelector(".my-board");
  const enemyBoard = document.querySelector(".enemy-board");

  for (let i = 0; i < gridSize; i++) {
    const row1 = document.createElement("div");
    const row2 = document.createElement("div");
    row1.classList.add("row");
    row2.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
      const column1 = document.createElement("div");
      const column2 = document.createElement("div");
      column1.classList.add("cell", "my-cells");
      column2.classList.add("cell", "enemy-cells");
      row1.append(column1);
      row2.append(column2);
    }

    myBoard.append(row1);
    enemyBoard.append(row2);
  }
}
