import GameBoard from "./gameboard.js";
import Ship from "./ship.js";

export default (status = "human") => {
    let fleet = {};
    let playerBoard;

    const row = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const col = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const axis = ["hor", "ver"];

    const getStatus = () => status;
    const getFleet = () => fleet;
    const getPlayerBoard = () => playerBoard;

    const generateFleet = () => {
        fleet = {};
        let carrier = Ship(5);
        let battleship = Ship(4);
        let destroyer = Ship(3);
        let submarine = Ship(3);
        let patrolBoat = Ship(2);

        fleet["Carrier"] = carrier;
        fleet["Battleship"] = battleship;
        fleet["Destroyer"] = destroyer;
        fleet["Submarine"] = submarine;
        fleet["Patrol Boat"] = patrolBoat;
    }

    const generatePlayerBoard = () => {
        playerBoard = GameBoard();
        playerBoard.generateBoard();
    }

    const randomPlacements = () => {
        playerBoard.generateBoard();

        for (const ship in fleet) {
            let invalid = true;
            let ranRow, ranCol, ranAxis, coor;

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
        if (enemy.getPlayerBoard().canReceiveAttack(coor) === true) {
            enemy.getPlayerBoard().receiveAttack(coor);
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

    const randomAttack = (enemy) => {
        let ranRow = row[Math.floor(Math.random() * row.length)];
        let ranCol = col[Math.floor(Math.random() * col.length)];
        let coor = ranRow + ranCol;

        let attackEnemy = attack(coor, enemy);

        return [coor, attackEnemy];
    }

    return { 
        getStatus, 
        getFleet,
        getPlayerBoard,
        generateFleet, 
        generatePlayerBoard,
        randomPlacements, 
        attack, 
        placeOneShip,
        randomAttack
    };
}