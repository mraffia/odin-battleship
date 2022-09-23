import Player from "../factories/player.js"

test("getStatus() will return 'human' if the player is a human", () => {
    const playerOne = Player();
    expect(playerOne.getStatus()).toBe("human");
});

test("getStatus() will return 'computer' if the player is a AI", () => {
    const playerOne = Player("computer");
    expect(playerOne.getStatus()).toBe("computer");
});

test("getFleet() will return all ships the player has", () => {
    const playerOne = Player();

    playerOne.generateFleet();
    let fleet = playerOne.getFleet();

    expect(fleet['Carrier'].getLength()).toBe(5);
    expect(fleet['Battleship'].getLength()).toBe(4);
    expect(fleet['Destroyer'].getLength()).toBe(3);
    expect(fleet['Submarine'].getLength()).toBe(3);
    expect(fleet['Patrol Boat'].getLength()).toBe(2);
});

test("randomPlacements() will place all five  ships on the player's board randomly", () => {
    const playerOne = Player();

    playerOne.generateFleet();
    playerOne.generatePlayerBoard();
    playerOne.randomPlacements();

    let fleet = playerOne.getFleet();
    
    expect(fleet['Carrier'].isSunk()).toBe(false);
    expect(fleet['Battleship'].isSunk()).toBe(false);
    expect(fleet['Destroyer'].isSunk()).toBe(false);
    expect(fleet['Submarine'].isSunk()).toBe(false);
    expect(fleet['Patrol Boat'].isSunk()).toBe(false); 
});

test("randomAttack(enemy) will attack a random coordinate on enemy's board", () => {
    const playerOne = Player();
    const enemy = Player();

    enemy.generatePlayerBoard();

    expect(playerOne.randomAttack(enemy)).toBeTruthy();
});