import './style.css';
import Player from "./factories/player.js";

const start = () => {
    const playerOne = Player();
    const computer = Player("computer");

    playerOne.generateFleet();
    computer.generateFleet();

    playerOne.generatePlayerBoard();
    computer.generatePlayerBoard();

    playerOne.randomPlacements();
    computer.randomPlacements();

    console.log(playerOne.getPlayerBoard().getBoard());
    console.log(computer.getPlayerBoard().getBoard());
}

start();