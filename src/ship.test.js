import { Ship } from "./ship.js";

test("hit(1) takes index 1 and marks that ship's area as 'hit'", () => {
    const ship = new Ship(2);
    ship.hit(1);
    expect(ship.area[1]).toBe("x");
});

test("isSunk() determines if a ship is sunk or not", () => {
    const ship = new Ship(2);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
});