import { Gameboard } from "./Gameboard";
export { Player };
function Player(playerName) {
  const gameBoard = Gameboard();
  return { playerName, gameBoard };
}
