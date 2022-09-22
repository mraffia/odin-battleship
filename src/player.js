import { Ship } from "./ship.js";
import { GameBoard } from "./gameboard.js";

const Player = (status = "human") => {
    let fleet = {};
    let playerBoard;

    const getStatus = () => status;
    const getFleet = () => fleet;
    const getPlayerBoard = () => playerBoard;

    const generateFleet = () => {
        fleet = {};
        let carrier = new Ship(5);
        let battleship = new Ship(4);
        let destroyer = new Ship(3);
        let submarine = new Ship(3);
        let patrolBoat = new Ship(2);

        fleet["Carrier"] = carrier;
        fleet["Battleship"] = battleship;
        fleet["Destroyer"] = destroyer;
        fleet["Submarine"] = submarine;
        fleet["Patrol Boat"] = patrolBoat;
    }

    const generatePlayerBoard = () => {
        playerBoard = new GameBoard();
        playerBoard.generateBoard();
    }

    return { getStatus, getFleet, generateFleet, getPlayerBoard, generatePlayerBoard };
}

export { Player };