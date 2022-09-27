import GameBoard from './gameboard';
import Ship from './ship';

export default (status = 'human') => {
  let fleet = {};
  let playerBoard;

  const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const col = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const axis = ['hor', 'ver'];

  const getStatus = () => status;
  const getFleet = () => fleet;
  const getPlayerBoard = () => playerBoard;

  const generateFleet = () => {
    fleet = {};
    const carrier = Ship(5);
    const battleship = Ship(4);
    const destroyer = Ship(3);
    const submarine = Ship(3);
    const patrolBoat = Ship(2);

    fleet.Carrier = carrier;
    fleet.Battleship = battleship;
    fleet.Destroyer = destroyer;
    fleet.Submarine = submarine;
    fleet['Patrol Boat'] = patrolBoat;
  };

  const generatePlayerBoard = () => {
    playerBoard = GameBoard();
    playerBoard.generateBoard();
  };

  const randomPlacements = () => {
    playerBoard.generateBoard();

    const ships = Object.entries(fleet);

    for (let i = 0; i < ships.length; i++) {
      let ranRow; let ranCol; let ranAxis; let
        coor;

      let place = false;
      while (!place) {
        ranRow = row[Math.floor(Math.random() * row.length)];
        ranCol = col[Math.floor(Math.random() * col.length)];
        ranAxis = axis[Math.floor(Math.random() * axis.length)];
        coor = ranRow + ranCol;

        if (playerBoard.canPlaceShip(fleet[ships[i][0]], coor, ranAxis)[0] === false) {
          continue;
        } else if (playerBoard.canPlaceShip(fleet[ships[i][0]], coor, ranAxis)[0] === true) {
          playerBoard.placeShip(fleet[ships[i][0]], coor, ranAxis);
          place = true;
        }
      }
    }
  };

  const attack = (coor, enemy) => {
    if (enemy.getPlayerBoard().canReceiveAttack(coor) === true) {
      const attackEnemy = enemy.getPlayerBoard().receiveAttack(coor);
      return attackEnemy;
    }
    return false;
  };

  const placeOneShip = (ship, coor, boardAxis) => {
    if (playerBoard.canPlaceShip(ship, coor, boardAxis)[0] === true) {
      playerBoard.placeShip(ship, coor, boardAxis);
      return true;
    }
    return false;
  };

  const randomAttack = (enemy) => {
    let ranRow; let ranCol; let
      coor;

    let attackEnemy = false;
    while (!attackEnemy) {
      ranRow = row[Math.floor(Math.random() * row.length)];
      ranCol = col[Math.floor(Math.random() * col.length)];
      coor = ranRow + ranCol;
      attackEnemy = attack(coor, enemy);
    }

    return [coor, attackEnemy];
  };

  return {
    getStatus,
    getFleet,
    getPlayerBoard,
    generateFleet,
    generatePlayerBoard,
    randomPlacements,
    attack,
    placeOneShip,
    randomAttack,
  };
};
