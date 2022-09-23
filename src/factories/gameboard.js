const GameBoard = () => {
    let board = {};
    const row = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    const getBoard = () => board;

    const generateBoard = () => {
        board = {};
        let coor = "";
        
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j < 11; j++) {
                coor = row[i] + (j);
                board[coor] = null;
            }
        }
    }

    const placeShip = (ship, coor, axis) => {
        let tempCoor = coor;
        let shipRow = coor.charAt(0);
        let shipCol = coor.slice(1);

        if (canPlaceShip(ship, coor, axis) === false) {
            return;
        } 

        for (let i = 0; i < ship.getLength(); i++) {
            board[tempCoor] = ship;
            ship.setArea(tempCoor);

            if (axis === "hor") {
                shipCol = Number(shipCol) + 1;
                tempCoor = shipRow + shipCol;
            } else if (axis === "ver") {
                shipRow = row[row.indexOf(shipRow) + 1];
                tempCoor = shipRow + shipCol;
            }
        }
    }

    const canPlaceShip = (ship, coor, axis) => {
        let tempCoor = coor;
        let shipRow = coor.charAt(0);
        let shipCol = coor.slice(1);

        for (let i = 0; i < ship.getLength(); i++) {
            if (axis === "hor") {
                if (board[tempCoor] !== null) {
                    return false;
                } else if (board[tempCoor] === undefined) {
                    return false;
                }
                shipCol = Number(shipCol) + 1;
                tempCoor = shipRow + shipCol;
            } else if (axis === "ver") {
                if (board[tempCoor] !== null) {
                    return false;
                } else if (board[tempCoor] === undefined) {
                    return false;
                }
                shipRow = row[row.indexOf(shipRow) + 1];
                tempCoor = shipRow + shipCol;
            }
        }
    
        return true;
    }

    const receiveAttack = coor => {
        if (board[coor] === "x" || board[coor] === undefined) {
            return false;
        } else if (board[coor] !== null) {
            board[coor].hit(coor);
        } else {
            board[coor] = "x";
        }
        return true;
    }

    const areAllSunk = () => {
        for (const coor in board) {
            if (board[coor] !== null && board[coor] !== "x") {
                if (board[coor].isSunk() === false) {
                    return false;
                }
            }
        }
        return true;
    }

    return { getBoard, generateBoard, placeShip, receiveAttack, areAllSunk, canPlaceShip };

}

export { GameBoard };