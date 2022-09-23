import './style.css';
import Player from "./factories/player.js";

function game() {
    const playerOne = Player();
    const computer = Player("computer");

    playerOne.generateFleet();
    computer.generateFleet();

    playerOne.generatePlayerBoard();
    computer.generatePlayerBoard();

    playerOne.randomPlacements();
    computer.randomPlacements();

    let bothAlive = true;
    let turn = 1;
    let result;

    console.log("START");

    while(bothAlive) {
        console.log(turn);
        turn++;

        let playerAttack = playerOne.randomAttack(computer);
        let computerAttack = computer.randomAttack(playerOne);

        if (playerAttack[1] === true) {
            if (computer.getPlayerBoard().areAllSunk() === true) {
                bothAlive = false;
                result = "Player wins, computer lost"
            }
        }

        if (computerAttack[1] === true) {
            if (playerOne.getPlayerBoard().areAllSunk() === true) {
                bothAlive = false;
                result = "Computer wins, player lost"
            }
        }
    }

    console.log(result);
    console.log("GAME OVER");
}

game();