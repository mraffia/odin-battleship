import GameBoard from "../factories/gameboard.js";
import Ship from "../factories/ship.js";

test("placeShip(ship, 'A1', 'hor') able to place a ship at 'A1' coordinate horizontally", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");

    let board = gameBoard.getBoard();

    expect(board["A1"]).toEqual(ship);
    expect(board["A2"]).toEqual(ship);
});

test("placeShip(ship, 'A1', 'ver') able to place a ship at 'A1' coordinate vertically", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "ver");

    let board = gameBoard.getBoard();
    
    expect(board["A1"]).toEqual(ship);
    expect(board["B1"]).toEqual(ship);
});

test("canPlaceShip(ship, 'A1', 'hor') will return true cause it is a valid and empty coordinate", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();

    expect(gameBoard.canPlaceShip(ship, "A1", "hor")[0]).toBe(true);
});

test("canPlaceShip(ship, 'A11', 'hor') will return false cause its coordinate is out of bounds", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();

    expect(gameBoard.canPlaceShip(ship, "A11", "hor")[0]).toBe(false);
});

test("canPlaceShip(ship, 'A2', 'hor') will return false cause its coordinate is on top of another ship", () => {
    const gameBoard = GameBoard();
    const ship1 = Ship(2);
    const ship2 = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship1, "A1", "hor");

    expect(gameBoard.canPlaceShip(ship2, "A2", "hor")[0]).toBe(false);
});

test("canPlaceShip(ship, 'A10', 'hor') will return false cause parts of its ship's coordinate is out of bounds", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();

    expect(gameBoard.canPlaceShip(ship, "A10", "hor")[0]).toBe(false);
});

test("canPlaceShip(ship, 'A1', 'ver') will return false cause parts of its ship's coordinate is on top of another ship", () => {
    const gameBoard = GameBoard();
    const ship1 = Ship(2);
    const ship2 = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship1, "B1", "hor");

    expect(gameBoard.canPlaceShip(ship2, "A1", "ver")[0]).toBe(false);
});

test("receiveAttack('A1') will mark 'hit' a ship placed at 'A1'", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");

    let received = gameBoard.receiveAttack("A1");
    let board = gameBoard.getBoard();
    let shipArea = ship.getArea();

    expect(shipArea["A1"]).toBe("x");
    expect(received).toBe("hit");
    expect(board["A1"]).toEqual(ship);
});

test("receiveAttack('C3') will mark 'x' the coordinates of the missed shot", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");

    let received = gameBoard.receiveAttack("C3");
    let board = gameBoard.getBoard();

    expect(received).toBe("miss");
    expect(board["C3"]).toBe("x");
});

test("canReceiveAttack('A1') will return true as there is a ship at the coordinate", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");

    expect(gameBoard.canReceiveAttack("A1")).toBe(true);
});

test("canReceiveAttack('A1') will return true as the coordinate is in the board", () => {
    const gameBoard = GameBoard();

    gameBoard.generateBoard();

    expect(gameBoard.canReceiveAttack("A1")).toBe(true);
});

test("canReceiveAttack('A1') will return false as the coordinate is already marked 'x'", () => {
    const gameBoard = GameBoard();

    gameBoard.generateBoard();
    gameBoard.receiveAttack("A1");

    expect(gameBoard.canReceiveAttack("A1")).toBe(false);
});

test("canReceiveAttack('A11') will return false as the coordinate is out of bounds", () => {
    const gameBoard = GameBoard();

    gameBoard.generateBoard();

    expect(gameBoard.canReceiveAttack("A11")).toBe(false);
});

test("canReceiveAttack('A1') will return false as the coordinate is an area of a ship that has been hit", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");
    gameBoard.receiveAttack("A1");

    expect(gameBoard.canReceiveAttack("A1")).toBe(false);
});

test("areAllSunk() will return false as not all ship has sunk", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");
    gameBoard.receiveAttack("A1");

    expect(gameBoard.areAllSunk()).toBe(false);
});

test("areAllSunk() will return true as all ship has sunk", () => {
    const gameBoard = GameBoard();
    const ship = Ship(2);

    gameBoard.generateBoard();
    gameBoard.placeShip(ship, "A1", "hor");
    gameBoard.receiveAttack("A1");
    gameBoard.receiveAttack("A2");

    expect(gameBoard.areAllSunk()).toBe(true);
});
