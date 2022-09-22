import { GameBoard } from "./gameboard";
import { Ship } from "./ship.js";

test("placeShip(ship, 'A1', 'hor') able to place a ship at 'A1' coordinate horizontally", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");

    let board = gameBoard.getBoard();

    expect(board["A1"]).toEqual(ship);
    expect(board["A2"]).toEqual(ship);
});

test("placeShip(ship, 'A1', 'ver') able to place a ship at 'A1' coordinate vertically", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "ver");

    let board = gameBoard.getBoard();
    
    expect(board["A1"]).toEqual(ship);
    expect(board["B1"]).toEqual(ship);
});

test("receiveAttack('A1') will mark 'hit' a ship placed at 'A1'", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");
    gameBoard.receiveAttack("A1");

    let board = gameBoard.getBoard();
    let shipArea = ship.getArea();

    expect(shipArea["A1"]).toBe("x");
    expect(board["A1"]).toEqual(ship);
});

test("receiveAttack('A1') will record the coordinates of the missed shot", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");
    gameBoard.receiveAttack("C3");

    let board = gameBoard.getBoard();

    expect(board["C3"]).toBe("x");
});

test("areAllSunk() will return false as not all ship has sunk", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");
    gameBoard.receiveAttack("A1");

    expect(gameBoard.areAllSunk()).toBe(false);
});

test("areAllSunk() will return true as all ship has sunk", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");
    gameBoard.receiveAttack("A1");
    gameBoard.receiveAttack("A2");

    expect(gameBoard.areAllSunk()).toBe(true);
});