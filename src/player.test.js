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

