export { DisplayController };
import { CreateUiGrid } from "./CreateUiGrid";
import { GameController } from "./GameController";
import { RenderBoard } from "./RenderBoard";

function DisplayController() {
  CreateUiGrid();
  const game = GameController();
  const playerTurnDiv = document.querySelector(".turn");
  const playerBoardDiv = document.querySelector(".my-board");
  const enemyBoardDiv = document.querySelector(".enemy-board");

  const updateScreen = () => {
    //get the newest version of the board and player turn
    const activePlayer = game.getActivePlayer();
    const playerBoard = activePlayer.gameBoard.board;
    const enemyBoard = game.getEnemyPlayer().gameBoard.board;

    //Display player's turn
    playerTurnDiv.textContent = `${activePlayer.playerName}'s turn...`;

    RenderBoard(playerCells, playerBoard, true);
    RenderBoard(enemyCells, enemyBoard, false);

    //We dont need to return anything from this module because everything is encapsulated inside this screen controller
  };
  const playerCells = [...document.querySelectorAll(".my-cells")];
  const enemyCells = [...document.querySelectorAll(".enemy-cells")];
  //Add event listener for the board
  enemyCells.forEach((cell) =>
    cell.addEventListener("click", clickHandlerBoard),
  );
  function clickHandlerBoard(e) {
    const selectedRow = e.target.dataset.row;
    const selectedColumn = e.target.dataset.col;
    console.log(selectedRow, selectedColumn);
    //Stop attacking same coordinates
    if (
      e.target.classList.contains("miss") ||
      e.target.classList.contains("hit")
    ) {
      return;
    }
    //Make sure I've clicked a column and not the gaps in between
    if (!selectedRow || !selectedColumn) return;

    game.playRound(selectedRow, selectedColumn);
    updateScreen();
    console.log(selectedRow);
    console.log(selectedColumn);
  }
  //initial render
  updateScreen();
}
