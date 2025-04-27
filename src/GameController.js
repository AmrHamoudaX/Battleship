export { GameController };
import { Ship } from "./Ship";
import { Player } from "./Player";

function GameController() {
  //Players
  const player1 = Player("Russia");
  const player2 = Player("Germany");
  console.log(player1.gameBoard);

  //Boards
  const board1 = player1.gameBoard.board;
  const board2 = player2.gameBoard.board;

  //Fleet and placements
  function Fleet() {
    const destroyer = Ship(4);
    const heavyCruiser = Ship(3);
    const submarine = Ship(1);
    return { destroyer, heavyCruiser, submarine };
  }

  player1.gameBoard.placeShip(Fleet().destroyer, 5, 7, "vertical");
  player1.gameBoard.placeShip(Fleet().heavyCruiser, 2, 7, "horizontal");
  player1.gameBoard.placeShip(Fleet().submarine, 1, 7, "horizontal");
  player2.gameBoard.placeShip(Fleet().destroyer, 1, 3, "vertical");
  player2.gameBoard.placeShip(Fleet().heavyCruiser, 4, 5, "horizontal");
  player2.gameBoard.placeShip(Fleet().submarine, 9, 7, "horizontal");

  //End

  /// Start Game
  let activePlayer = player1;

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
  };

  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    console.log(board1);
    console.log(board2);
    console.log(`${getActivePlayer().playerName}'s turn`);
  };

  const playRound = (x, y) => {
    console.log(
      `${getActivePlayer().playerName}'s attacks coordinates (${x}, ${y})`,
    );
    if (getActivePlayer() === player1) {
      player2.gameBoard.attack(x, y);
      if (player2.gameBoard.Defeated()) {
        console.log(`${player1.playerName} Wins!`);
        return;
      }
    } else if (activePlayer === player2) {
      player1.gameBoard.attack(x, y);
      if (player1.gameBoard.Defeated()) {
        console.log(`${player2.playerName} Winss!`);
        return;
      }
    }

    // This is where  i need to check for winner and handle win msg

    //

    switchPlayerTurn();
    printNewRound();
  };

  printNewRound();

  return { playRound, getActivePlayer, printNewRound };
}
