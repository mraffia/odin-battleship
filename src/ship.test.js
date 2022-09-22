import { Ship } from "./ship.js";

test("hit() takes a number and marks that ship's area as 'hit'", () => {
    const ship = new Ship(2);
    ship.hit(1);
    expect(ship.area[1] === "x");
});