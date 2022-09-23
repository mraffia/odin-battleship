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

test("randomPlacements() will place all five new ships on the player's board randomly", () => {
    let player = new Player();

    player.generateFleet();
    player.generatePlayerBoard();
    player.randomPlacements();

    let fleet = player.getFleet();
    
    expect(fleet['Carrier'].isSunk()).toBe(false);
    expect(fleet['Battleship'].isSunk()).toBe(false);
    expect(fleet['Destroyer'].isSunk()).toBe(false);
    expect(fleet['Submarine'].isSunk()).toBe(false);
    expect(fleet['Patrol Boat'].isSunk()).toBe(false); 
});
