import { Ship } from "./ship.js";
import { GameBoard } from "./gameboard";

test("hit(1) takes index 1 and marks that ship's area as 'hit'", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.placeShip(ship, "A1", "hor");
    ship.hit("A1");

    expect(ship.area["A1"]).toBe("x");
});

test("isSunk() determines if a ship is sunk or not", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.placeShip(ship, "A1", "hor");
    ship.hit("A1");
    ship.hit("A2");

    expect(ship.isSunk()).toBe(true);
});