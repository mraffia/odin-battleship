import { Player } from "./player.js"
import { GameBoard } from "./gameboard.js";
import { Ship } from "./ship.js";

test("isAI() will return false cause the player is not an AI", () => {
    let player = new Player();
    expect(player.isAI()).toBe(false);
});

test("isAI('AI') will return true cause the player is an AI", () => {
    let player = new Player('AI');
    expect(player.isAI()).toBe(true);
});

