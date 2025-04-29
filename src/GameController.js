import { Ship } from "./Ship";
import { Player } from "./Player";
import { TogglePassScreen } from "./TogglePassScreen";

function GameController() {
  //Players
  const player1 = Player("Player1");
  const player2 = Player("Player2");
  let activePlayer = player1;

  const getActivePlayer = () => activePlayer;

  const getEnemyPlayer = () => {
    return getActivePlayer() === player1 ? player2 : player1;
  };

  //Fleet and placements
  function Fleet() {
    const destroyer = Ship(4);
    const heavyCruiser = Ship(3);
    const submarine = Ship(1);
    return { destroyer, heavyCruiser, submarine };
  }
  const player1Fleet = Fleet();
  const player2Fleet = Fleet();

  player1.gameBoard.placeShip(player1Fleet.destroyer, 5, 7, "vertical");
  player1.gameBoard.placeShip(player1Fleet.heavyCruiser, 2, 7, "horizontal");
  player1.gameBoard.placeShip(player1Fleet.submarine, 1, 7, "horizontal");
  player2.gameBoard.placeShip(player2Fleet.destroyer, 1, 3, "vertical");
  player2.gameBoard.placeShip(player2Fleet.heavyCruiser, 4, 5, "horizontal");
  player2.gameBoard.placeShip(player2Fleet.submarine, 9, 7, "horizontal");

  //End

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
  };

  const printNewRound = () => {
    //Boards
    const activeBoard = getActivePlayer().gameBoard.board;
    const enemyBoard = getEnemyPlayer().gameBoard.board;
    console.log(activeBoard);
    console.log(enemyBoard);
    console.log(`${getActivePlayer().playerName}'s turn`);
  };

  const playRound = (x, y) => {
    const enemy = getEnemyPlayer();
    console.log(
      `${getActivePlayer().playerName}'s attacks coordinates (${x}, ${y})`,
    );
    enemy.gameBoard.attack(x, y);
    if (CheckForWinner()) return;
    console.log(enemy.gameBoard.board[x][y]);
    if (enemy.gameBoard.board[x][y] === "O") {
      return;
    } else {
      switchPlayerTurn();
      TogglePassScreen(activePlayer.playerName);
    }
  };

  // This is where  i need to check for winner and handle win msg
  function CheckForWinner() {
    if (getEnemyPlayer().gameBoard.Defeated()) {
      console.log(`${getActivePlayer().playerName} Wins!!`);
      return true;
    }
    return false;
  }

  printNewRound();

  return {
    playRound,
    getActivePlayer,
    printNewRound,
    getEnemyPlayer,
    CheckForWinner,
  };
}

export { GameController };
