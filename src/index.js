import './style.css';
import Player from './factories/player';
import battlePage from './battlePage';
import shipPlacementPage from './shipPlacementPage';

function start() {
  while (document.body.hasChildNodes()) {
    document.body.removeChild(document.body.firstChild);
  }

  const playerOne = Player();
  const computer = Player('computer');

  playerOne.generateFleet();
  computer.generateFleet();

  playerOne.generatePlayerBoard();
  computer.generatePlayerBoard();

  const playerBoard = playerOne.getPlayerBoard().getBoard();
  const playerCoors = Object.keys(playerBoard);

  const playerFleet = playerOne.getFleet();
  const playerShips = Object.keys(playerFleet);

  computer.randomPlacements();

  document.body.appendChild(shipPlacementPage(playerOne));

  const shipInfo = document.querySelector('#ship-info');
  const axisButton = document.querySelector('#axis');
  const randomizeButton = document.querySelector('#randomize');
  const playerSquares = document.querySelector('#player-board');
  const playerChildren = playerSquares.children;

  let shipIndex = 0;
  let axis = 'hor';

  for (let i = 0; i < playerChildren.length; i++) {
    const playerSquare = playerChildren[i];
    let canPlace; let
      shipSquare;

    playerSquare.addEventListener('mouseover', () => {
      canPlace = playerOne.getPlayerBoard().canPlaceShip(playerFleet[playerShips[shipIndex]], playerCoors[i], axis);
      if (canPlace[0] === true) {
        for (let j = 0; j < canPlace[1].length; j++) {
          shipSquare = document.querySelector(`#player-${canPlace[1][j]}`);
          shipSquare.style.cssText += 'background: gray;';
        }
      } else if (playerBoard[playerCoors[i]] === null) {
        playerSquare.style.cssText += 'background: lightcoral;';
      }
    });

    playerSquare.addEventListener('mouseout', () => {
      canPlace = playerOne.getPlayerBoard().canPlaceShip(playerFleet[playerShips[shipIndex]], playerCoors[i], axis);
      if (canPlace[0] === true) {
        for (let j = 0; j < canPlace[1].length; j++) {
          shipSquare = document.querySelector(`#player-${canPlace[1][j]}`);
          shipSquare.style.cssText += 'background: white;';
        }
      } else if (playerBoard[playerCoors[i]] === null) {
        playerSquare.style.cssText += 'background: white;';
      }
    });

    playerSquare.addEventListener('click', () => {
      canPlace = playerOne.getPlayerBoard().canPlaceShip(playerFleet[playerShips[shipIndex]], playerCoors[i], axis);
      if (canPlace[0] === true) {
        playerOne.placeOneShip(playerFleet[playerShips[shipIndex]], playerCoors[i], axis);

        for (let j = 0; j < canPlace[1].length; j++) {
          shipSquare = document.querySelector(`#player-${canPlace[1][j]}`);
          shipSquare.style.cssText += 'background: gray;';
        }

        if (shipIndex >= playerShips.length - 1) {
          battle(playerOne, computer);
        }

        shipIndex += 1;
        shipInfo.textContent = `Placing: ${playerShips[shipIndex]}`;
      }
    });
  }

  axisButton.addEventListener('click', () => {
    if (axis === 'hor') {
      axisButton.textContent = 'Change to Horizontal';
      axis = 'ver';
    } else {
      axisButton.textContent = 'Change to Vertical';
      axis = 'hor';
    }
  });

  randomizeButton.addEventListener('click', () => {
    playerOne.randomPlacements();
    battle(playerOne, computer);
  });
}

function battle(playerOne, computer) {
  while (document.body.hasChildNodes()) {
    document.body.removeChild(document.body.firstChild);
  }

  const enemyBoard = computer.getPlayerBoard().getBoard();
  const enemyCoors = Object.keys(enemyBoard);

  document.body.appendChild(battlePage(playerOne, computer));

  const gameInfo = document.querySelector('#game-info');
  const restartButton = document.querySelector('#restart');
  const computerSquares = document.querySelector('#enemy-board');
  const computerChildren = computerSquares.children;

  for (let i = 0; i < computerChildren.length; i++) {
    const enemySquare = computerChildren[i];

    enemySquare.addEventListener('click', () => {
      const playerAttack = playerOne.attack(enemyCoors[i], computer);
      let playerText = '';

      if (playerAttack === 'miss') {
        enemySquare.style.cssText += 'background: lightgreen;';
        playerText = `You attacked coordinate ${enemyCoors[i]} and it's a ${playerAttack}!`;
      } else if (playerAttack === 'hit') {
        enemySquare.style.cssText += 'background: lightcoral;';
        enemySquare.classList.add('miss');
        playerText = `You attacked coordinate ${enemyCoors[i]} and it's a ${playerAttack}!`;
        if (computer.getPlayerBoard().areAllSunk() === true) {
          if (confirm('CONGRATS, YOU WIN! (Press any button to restart)')) {
            start();
          } else {
            start();
          }
          return;
        }
      } else {
        playerText = 'You attacked an already marked spot!';
      }

      const enemyAttack = computer.randomAttack(playerOne);
      const playerSquareSelect = document.querySelector(`#player-${enemyAttack[0]}`);
      let enemyText = '';

      if (enemyAttack[1] === 'miss') {
        playerSquareSelect.classList.add('miss');
        enemyText = `Computer attacked coordinate ${enemyAttack[0]} and it's a ${enemyAttack[1]}!`;
      } else if (enemyAttack[1] === 'hit') {
        playerSquareSelect.style.cssText += 'background: lightcoral;';
        enemyText = `Computer attacked coordinate ${enemyAttack[0]} and it's a ${enemyAttack[1]}!`;
        if (playerOne.getPlayerBoard().areAllSunk() === true) {
          if (confirm('THE COMPUTER WINS :( (Press any button to restart)')) {
            start();
          } else {
            start();
          }
          return;
        }
      }

      gameInfo.innerHTML = `${playerText}<hr>${enemyText}`;
    });
  }

  restartButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to restart? (Back to ship placement)')) {
      start();
    }
  });
}

start();
