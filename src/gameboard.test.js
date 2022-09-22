import { GameBoard } from "./gameboard";
import { Ship } from "./ship.js";

test("placeShip(ship, 'A1', 'hor') able to place a ship at 'A1' coordinate horizontally", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");

    let board = gameBoard.getBoard();

    expect(board["A1"]).toBe("o");
    expect(board["A2"]).toBe("o");
});

test("placeShip(ship, 'A1', 'ver') able to place a ship at 'A1' coordinate vertically", () => {
    const gameBoard = new GameBoard();
    const ship = new Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "ver");

    let board = gameBoard.getBoard();
    
    expect(board["A1"]).toBe("o");
    expect(board["B1"]).toBe("o");
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
    expect(board["A1"]).toBe("x");
});