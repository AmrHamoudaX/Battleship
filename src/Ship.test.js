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
});
