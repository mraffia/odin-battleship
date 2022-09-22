import { Player } from "./player.js"
import { GameBoard } from "./gameboard.js";
import { Ship } from "./ship.js";

test("getStatus() will return 'human' if the player is a human", () => {
    let player = new Player();
    expect(player.getStatus()).toBe("human");
});

test("getStatus() will return 'AI' if the player is an AI", () => {
    let player = new Player("AI");
    expect(player.getStatus()).toBe("AI");
});

test("getFleet() will return all ships the player has", () => {
    let player = new Player();

    player.generateFleet();
    let fleet = player.getFleet();

    expect(fleet['Carrier'].getLength()).toBe(5);
    expect(fleet['Battleship'].getLength()).toBe(4);
    expect(fleet['Destroyer'].getLength()).toBe(3);
    expect(fleet['Submarine'].getLength()).toBe(3);
    expect(fleet['Patrol Boat'].getLength()).toBe(2);
});

test("getPlayerBoard() will return the board the player has", () => {
    let player = new Player();

    player.generatePlayerBoard();
    let playerBoard = player.getPlayerBoard();

    expect(Object.keys(playerBoard.getBoard()).length).toBe(100);
});

test("attack('A1) will attack the coordinate 'A1' of enemy's board", () => {
    let playerOne = new Player();
    let playerTwo = new Player("AI");

    playerTwo.generatePlayerBoard();
    playerOne.attack("A1");

    let playerTwoBoard = playerTwo.getPlayerBoard();

    expect(playerBoard.getBoard()["A1"]).toBe("x");
});
