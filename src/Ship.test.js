import { Ship } from "./Ship";

describe("Ship", () => {
  const babyShip = Ship(3);
  babyShip.hit();
  babyShip.hit();
  babyShip.hit();
  babyShip.hit();
  babyShip.hit();
  test("increases number of hits", () => {
    expect(babyShip.getHits()).toBe(5);
  });

  test("considers the ship is sunk if hits equals ship's length", () => {
    expect(babyShip.isSunk()).toBe(true);
  });
  test("returns false if hits is less than length", () => {
    const shippy = Ship(4);
    shippy.hit();
    shippy.hit();
    shippy.hit();
    expect(shippy.isSunk()).toBe(false);
  });
});
