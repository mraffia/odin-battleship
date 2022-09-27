export default () => {
  let board = {};
  const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const getBoard = () => board;

  const generateBoard = () => {
    board = {};
    let coor = '';

    for (let i = 0; i < 10; i++) {
      for (let j = 1; j < 11; j++) {
        coor = row[i] + (j);
        board[coor] = null;
      }
    }
  };

  const canPlaceShip = (ship, coor, axis) => {
    let tempCoor = coor;
    let shipRow = coor.charAt(0);
    let shipCol = coor.slice(1);
    const allCoor = [];

    for (let i = 0; i < ship.getLength(); i++) {
      if (axis === 'hor') {
        if (board[tempCoor] !== null) {
          return [false, allCoor];
        } if (board[tempCoor] === undefined) {
          return [false, allCoor];
        }
        allCoor.push(tempCoor);
        shipCol = Number(shipCol) + 1;
        tempCoor = shipRow + shipCol;
      } else if (axis === 'ver') {
        if (board[tempCoor] !== null) {
          return [false, allCoor];
        } if (board[tempCoor] === undefined) {
          return [false, allCoor];
        }
        allCoor.push(tempCoor);
        shipRow = row[row.indexOf(shipRow) + 1];
        tempCoor = shipRow + shipCol;
      }
    }

    return [true, allCoor];
  };

  const placeShip = (ship, coor, axis) => {
    if (canPlaceShip(ship, coor, axis)[0] === false) {
      return;
    }

    let tempCoor = coor;
    let shipRow = coor.charAt(0);
    let shipCol = coor.slice(1);

    for (let i = 0; i < ship.getLength(); i++) {
      board[tempCoor] = ship;
      ship.setArea(tempCoor);

      if (axis === 'hor') {
        shipCol = Number(shipCol) + 1;
        tempCoor = shipRow + shipCol;
      } else if (axis === 'ver') {
        shipRow = row[row.indexOf(shipRow) + 1];
        tempCoor = shipRow + shipCol;
      }
    }
  };

  const canReceiveAttack = (coor) => {
    if (board[coor] === 'x' || board[coor] === undefined) {
      return false;
    } if (board[coor] !== null) {
      if (board[coor].getArea()[coor] === 'x') {
        return false;
      }
    }
    return true;
  };

  const receiveAttack = (coor) => {
    if (canReceiveAttack(coor) === false) {
      return false;
    }

    if (board[coor] !== null) {
      board[coor].hit(coor);
      return 'hit';
    }

    board[coor] = 'x';
    return 'miss';
  };

  const areAllSunk = () => {
    const coors = Object.entries(board);

    for (let i = 0; i < coors.length; i++) {
      if (coors[i][1] !== null && coors[i][1] !== 'x') {
        if (coors[i][1].isSunk() === false) {
          return false;
        }
      }
    }

    return true;
  };

  return {
    getBoard,
    generateBoard,
    placeShip,
    receiveAttack,
    areAllSunk,
    canPlaceShip,
    canReceiveAttack,
  };
};
