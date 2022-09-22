import { Ship } from "./ship.js";
import { GameBoard } from "./gameboard";

test("hit(1) takes index 1 and marks that ship's area as 'hit'", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.placeShip(ship, "A1", "hor");
    ship.hit("A1");

    let shipArea = ship.getArea();

    expect(shipArea["A1"]).toBe("x");
});

test("isSunk() determines if a ship is sunk or not", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.placeShip(ship, "A1", "hor");
    ship.hit("A1");
    ship.hit("A2");

    expect(ship.isSunk()).toBe(true);
});

test("setArea('A1') will set coordinate 'A1' as one of the ship's area", () => {
    const ship = new Ship(2);
    ship.setArea("A1");

    let shipArea = ship.getArea();

    expect(shipArea["A1"]).toBe("o");
});

test("getLength() will return 2 as ship with length 2", () => {
    const ship = new Ship(2);
    expect(ship.getLength()).toBe(2);
});