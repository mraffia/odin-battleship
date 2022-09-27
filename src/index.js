import './style.css';
import Player from "./factories/player.js";
import { battlePage } from "./battlePage.js";
import { shipPlacementPage } from "./shipPlacementPage.js";

function start() {
    while (document.body.hasChildNodes()) {
        document.body.removeChild(document.body.firstChild);
    }

    const playerOne = Player();
    const computer = Player("computer");

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

    let shipInfo = document.querySelector('#ship-info');
    let axisButton = document.querySelector('#axis');
    let randomizeButton = document.querySelector('#randomize');
    let playerSquares = document.querySelector('#player-board');
    let playerChildren = playerSquares.children;

    let shipIndex = 0;
    let axis = "hor";

    for (let i = 0; i < playerChildren.length; i++) {
        let playerSquare = playerChildren[i];
        let canPlace, shipSquare;

        playerSquare.addEventListener('mouseover', (e) => {
            canPlace = playerOne.getPlayerBoard().canPlaceShip(playerFleet[playerShips[shipIndex]], playerCoors[i], axis);
            if (canPlace[0] === true) {
                for (let j = 0; j < canPlace[1].length; j++) {
                    shipSquare = document.querySelector(`#player-${canPlace[1][j]}`);
                    shipSquare.style.cssText += "background: gray;";
                }
            } else {
                if (playerBoard[playerCoors[i]] === null) {
                    playerSquare.style.cssText += "background: lightcoral;";
                }
            }
        });
        
        playerSquare.addEventListener('mouseout', (e) => {
            canPlace = playerOne.getPlayerBoard().canPlaceShip(playerFleet[playerShips[shipIndex]], playerCoors[i], axis);
            if (canPlace[0] === true) {
                for (let j = 0; j < canPlace[1].length; j++) {
                    shipSquare = document.querySelector(`#player-${canPlace[1][j]}`);
                    shipSquare.style.cssText += "background: white;";
                }
            } else {
                if (playerBoard[playerCoors[i]] === null) {
                    playerSquare.style.cssText += "background: white;";
                }
            }
        });

        playerSquare.addEventListener('click', (e) => {
            canPlace = playerOne.getPlayerBoard().canPlaceShip(playerFleet[playerShips[shipIndex]], playerCoors[i], axis);
            if (canPlace[0] === true) {

                playerOne.placeOneShip(playerFleet[playerShips[shipIndex]], playerCoors[i], axis);

                for (let j = 0; j < canPlace[1].length; j++) {
                    shipSquare = document.querySelector(`#player-${canPlace[1][j]}`);
                    shipSquare.style.cssText += "background: gray;";
                }

                if (shipIndex >= playerShips.length - 1) {
                    battle(playerOne, computer);
                }

                shipIndex++;
                shipInfo.textContent = `Placing: ${playerShips[shipIndex]}`;
            }
        });
    }

    axisButton.addEventListener('click', (e) => {
        if (axis === "hor") {
            axisButton.textContent = "Change to Horizontal";
            axis = "ver";
        } else {
            axisButton.textContent = "Change to Vertical";
            axis = "hor";
        }
    });

    randomizeButton.addEventListener('click', (e) => {
        playerOne.randomPlacements();
        battle(playerOne, computer);
    });

}

function battle(playerOne, computer) {
    while (document.body.hasChildNodes()) {
        document.body.removeChild(document.body.firstChild);
    }

    const playerBoard = playerOne.getPlayerBoard().getBoard();
    const playerCoors = Object.keys(playerBoard);
    const enemyBoard = computer.getPlayerBoard().getBoard();
    const enemyCoors = Object.keys(enemyBoard);

    document.body.appendChild(battlePage(playerOne, computer));

    let gameInfo = document.querySelector('#game-info');
    let restartButton = document.querySelector('#restart');
    let computerSquares = document.querySelector('#enemy-board');
    let computerChildren = computerSquares.children;

    for (let i = 0; i < computerChildren.length; i++) {
        let enemySquare = computerChildren[i];

        enemySquare.addEventListener('click', (e) => {
            let playerAttack = playerOne.attack(enemyCoors[i], computer);
            let playerText = "";

            if (playerAttack === "miss") {
                enemySquare.style.cssText += "background: lightgreen;";
                playerText = `You attacked coordinate ${enemyCoors[i]} and it's a ${playerAttack}!`;
            } else if (playerAttack === "hit") {
                enemySquare.style.cssText += "background: lightcoral;";
                enemySquare.classList.add('miss');
                playerText = `You attacked coordinate ${enemyCoors[i]} and it's a ${playerAttack}!`;
                if (computer.getPlayerBoard().areAllSunk() === true) {
                    if (confirm("CONGRATS, YOU WIN! (Press any button to restart)")) {
                        start();
                    } else {
                        start();
                    }
                    return;
                }
            } else {
                playerText = "You attacked an already marked spot!"
            }

            console.log(enemyBoard[enemyCoors[i]]);

            let enemyAttack = computer.randomAttack(playerOne);
            let playerSquareSelect = document.querySelector(`#player-${enemyAttack[0]}`);
            let enemyText = "";

            if (enemyAttack[1] === "miss") {
                playerSquareSelect.classList.add('miss');
                enemyText = `Computer attacked coordinate ${enemyAttack[0]} and it's a ${enemyAttack[1]}!`;
            } else if (enemyAttack[1] === "hit") {
                playerSquareSelect.style.cssText += "background: lightcoral;";
                enemyText = `Computer attacked coordinate ${enemyAttack[0]} and it's a ${enemyAttack[1]}!`;
                if (playerOne.getPlayerBoard().areAllSunk() === true) {
                    if (confirm("THE COMPUTER WINS :( (Press any button to restart)")) {
                        start();
                    } else {
                        start();
                    }
                    return;
                }
            }

            console.log(playerBoard[enemyAttack[0]]);
            gameInfo.innerHTML = `${playerText}<hr>${enemyText}`;

        });
    }

    restartButton.addEventListener('click', (e) => {
        if (confirm("Are you sure you want to restart? (Back to ship placement)")) {
            start();
        }
    });
}

start();
