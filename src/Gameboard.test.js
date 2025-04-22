import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

describe("Gameboard", () => {
  let gameboard;
  let daddyShip;
  let babyShip;
  beforeEach(() => {
    gameboard = Gameboard();
    daddyShip = Ship(4);
    babyShip = Ship(1);
  });
  test("places ships at specific coordinates", () => {
    gameboard.placeShip(daddyShip, 0, 0, "horizontal");
    expect(gameboard.board[0][0]).toBe(daddyShip);
    expect(gameboard.board[0][1]).toBe(daddyShip);
    expect(gameboard.board[0][2]).toBe(daddyShip);
    expect(gameboard.board[0][3]).toBe(daddyShip);

    gameboard.placeShip(babyShip, 3, 4, "vertical");
    expect(gameboard.board[3][4]).toBe(babyShip);
  });
  test("hits a pair of coordinates and determines whether or not the attack hit a ship or if it's a miss", () => {
    gameboard.placeShip(daddyShip, 3, 5, "vertical");
    gameboard.attack(6, 5);
    gameboard.attack(1, 1);
    gameboard.attack(3, 5);
    expect(gameboard.board[6][5]).toBe("O");
    expect(gameboard.board[1][1]).toBe("X");
    expect(gameboard.board[3][5]).toBe("O");
  });
  test("records missed shots", () => {
    gameboard.placeShip(daddyShip, 2, 1, "vertical");
    gameboard.placeShip(babyShip, 1, 8, "vertical");
    gameboard.attack(2, 1);
    gameboard.attack(5, 8);
    gameboard.attack(0, 8);
    gameboard.attack(2, 8);
    gameboard.attack(9, 8);
    gameboard.attack(1, 1);
    expect(gameboard.missedAttks()).toEqual([
      [0, 8],
      [1, 1],
      [2, 8],
      [5, 8],
      [9, 8],
    ]);
  });
  test("report whether or not all of the ships have been sunk", () => {
    gameboard.placeShip(babyShip, 5, 3, "vertical");
    gameboard.placeShip(daddyShip, 6, 3, "vertical");
    gameboard.attack(5, 3);
    gameboard.attack(8, 5);
    gameboard.attack(8, 4);
    gameboard.Defeated();
    expect(babyShip.isSunk()).toBe(true);
    expect(daddyShip.isSunk()).toBe(false);
  });
});
