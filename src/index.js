import './style.css';
import Player from "./factories/player.js";
import { battlePage } from "./battlePage.js";
import { shipPlacementPage } from "./shipPlacementPage.js";

function game() {
    while (document.body.hasChildNodes()) {
        document.body.removeChild(document.body.firstChild);
    }

    const playerOne = Player();
    const computer = Player("computer");

    playerOne.generateFleet();
    computer.generateFleet();

    playerOne.generatePlayerBoard();
    computer.generatePlayerBoard();

    //playerOne.randomPlacements();
    computer.randomPlacements();

    document.body.appendChild(shipPlacementPage(playerOne));

    //document.body.appendChild(battlePage(playerOne, computer));

    const playerBoard = playerOne.getPlayerBoard().getBoard();
    const playerCoors = Object.keys(playerBoard);
    const enemyBoard = computer.getPlayerBoard().getBoard();
    const enemyCoors = Object.keys(enemyBoard);

    let gameInfo = document.querySelector('#game-info');
    let playerSquares = document.querySelector('#player-board');
    let playerChildren = playerSquares.children;

    let carrier = playerOne.getFleet()["Carrier"];
    let axis = "hor";

    for (let i = 0; i < playerChildren.length; i++) {
        let playerSquare = playerChildren[i];

        playerSquare.addEventListener('mouseover', (e) => {
            let canPlace = playerOne.getPlayerBoard().canPlaceShip(carrier, playerCoors[i], axis);
            if (canPlace[0] === true) {
                playerSquare.style.cssText += "background: gray;";

                for (let i = 0; i < canPlace[1].length; i++) {
                    let shipSquare = document.querySelector(`#player-${canPlace[1][i]}`);
                    shipSquare.style.cssText += "background: gray;";
                }
            } else {
                playerSquare.style.cssText += "background: lightcoral;";
            }
        });
        
        playerSquare.addEventListener('mouseout', (e) => {
            for (let i = 0; i < playerChildren.length; i++) {
                playerChildren[i].style.cssText += "background: white;";
            }
        });
    }

    // let gameInfo = document.querySelector('#game-info');
    // let playerSquares = document.querySelector('#player-board');
    // let computerSquares = document.querySelector('#enemy-board');
    // let computerChildren = computerSquares.children;

    // const playerBoard = playerOne.getPlayerBoard().getBoard();
    // const playerCoors = Object.keys(playerBoard);
    // const enemyBoard = computer.getPlayerBoard().getBoard();
    // const enemyCoors = Object.keys(enemyBoard);

    // for (let i = 0; i < computerChildren.length; i++) {
    //     let enemySquare = computerChildren[i];

    //     enemySquare.addEventListener('click', (e) => {
    //         let playerAttack = playerOne.attack(enemyCoors[i], computer);
    //         let playerText = "";

    //         if (playerAttack === "miss") {
    //             enemySquare.classList.add('miss');
    //             playerText = `You attacked coordinate ${enemyCoors[i]} and it's a ${playerAttack}!`;
    //         } else if (playerAttack === "hit") {
    //             enemySquare.style.cssText += "background: lightcoral;";
    //             enemySquare.classList.add('miss');
    //             playerText = `You attacked coordinate ${enemyCoors[i]} and it's a ${playerAttack}!`;
    //             if (computer.getPlayerBoard().areAllSunk() === true) {
    //                 if (confirm("You win! (Press any button to restart)")) {
    //                     game();
    //                 } else {
    //                     game();
    //                 }
    //                 return;
    //             }
    //         } else {
    //             playerText = "You attacked an already marked spot!"
    //         }

    //         console.log(enemyBoard[enemyCoors[i]]);

    //         let enemyAttack = computer.randomAttack(playerOne);
    //         let playerSquareSelect = document.querySelector(`#player-${enemyAttack[0]}`);
    //         let enemyText = "";

    //         if (enemyAttack[1] === "miss") {
    //             playerSquareSelect.classList.add('miss');
    //             enemyText = `Computer attacked coordinate ${enemyAttack[i]} and it's a ${enemyAttack[1]}!`;
    //         } else if (enemyAttack[1] === "hit") {
    //             playerSquareSelect.style.cssText += "background: lightcoral;";
    //             enemyText = `Computer attacked coordinate ${enemyAttack[0]} and it's a ${enemyAttack[1]}!`;
    //             if (playerOne.getPlayerBoard().areAllSunk() === true) {
    //                 if (confirm("Computer win :( (Press any button to restart")) {
    //                     game();
    //                 } else {
    //                     game();
    //                 }
    //                 return;
    //             }
    //         }

    //         console.log(playerBoard[enemyAttack[0]]);
    //         gameInfo.innerHTML = `${playerText}<hr>${enemyText}`;

    //     });
    // }

}

game();

// let bothAlive = true;
// let turn = 1;
// let result;

// console.log("START");

// while(bothAlive) {
//     console.log(turn);
//     turn++;

//     let playerAttack = playerOne.randomAttack(computer);
//     let computerAttack = computer.randomAttack(playerOne);

//     if (playerAttack[1] === true) {
//         if (computer.getPlayerBoard().areAllSunk() === true) {
//             bothAlive = false;
//             result = "Player wins, computer lost"
//         }
//     }

//     if (computerAttack[1] === true) {
//         if (playerOne.getPlayerBoard().areAllSunk() === true) {
//             bothAlive = false;
//             result = "Computer wins, player lost"
//         }
//     }
// }

// console.log(result);
// console.log("GAME OVER");


