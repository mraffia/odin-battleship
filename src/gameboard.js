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
        let shipCol = coor.charAt(1);

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

    const receiveAttack = coor => {
        if (board[coor] !== null) {
            board[coor].hit(coor);
        } else {
            board[coor] = "x";
        }
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

    return { getBoard, generateBoard, placeShip, receiveAttack, areAllSunk };

}

export { GameBoard };