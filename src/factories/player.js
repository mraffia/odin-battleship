import { GameBoard } from "../factories/gameboard.js";
import { Ship } from "../factories/ship.js";

const Player = (status = "human") => {
    let fleet = {};
    let playerBoard = new GameBoard();

    const getStatus = () => status;
    const getFleet = () => fleet;

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
        playerBoard.generateBoard();
    }

    const randomPlacements = () => {
        playerBoard.generateBoard();

        const row = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const col = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        const axis = ["hor", "ver"];

        for (const ship in fleet) {
            let invalid = true;
            let ranRow;
            let ranCol;
            let ranAxis;
            let coor;

            while (invalid) {
                ranRow = row[Math.floor(Math.random() * row.length)];
                ranCol = col[Math.floor(Math.random() * col.length)];
                ranAxis = axis[Math.floor(Math.random() * axis.length)];
                coor = ranRow + ranCol;

                if (playerBoard.canPlaceShip(fleet[ship], coor, ranAxis) === false) {
                    continue;
                } else if (playerBoard.canPlaceShip(fleet[ship], coor, ranAxis) === true) {
                    playerBoard.placeShip(fleet[ship], coor, ranAxis);
                    invalid = false;
                }
            }
        }
    }

    const attack = (coor, enemy) => {
        if (enemy.playerBoard.canReceiveAttack(coor) === true) {
            enemy.playerBoard.receiveAttack(coor);
            return true;
        } 
        return false;
    }

    const placeOneShip = (ship, coor, axis) => {
        if (playerBoard.canPlaceShip(ship, coor, axis) === true) {
            playerBoard.placeShip(ship, coor, axis);
            return true;
        } 
        return false;
    }

    return { playerBoard, getStatus, getFleet, generateFleet, generatePlayerBoard, randomPlacements, attack, placeOneShip };
}

export { Player };