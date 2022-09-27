function battlePage(player, enemy) {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const pageHeader = document.createElement('h1');
    const content = document.createElement('div');
    const gameInfo = document.createElement('p');
    const allPlayerContainer = document.createElement('div');
    const playerContainer = document.createElement('div');
    const playerInfo = document.createElement('h2');
    const playerBoardContainer = document.createElement('div');
    const enemyContainer = document.createElement('div');
    const enemyInfo = document.createElement('h2');
    const enemyBoardContainer = document.createElement('div');
    const restartButton = document.createElement('button');
    const footer = document.createElement('div');

    container.setAttribute('id', 'container');
    header.setAttribute('id', 'header');
    content.setAttribute('id', 'content');
    gameInfo.setAttribute('id', 'game-info');
    allPlayerContainer.setAttribute('id', 'all-player-container');
    playerContainer.setAttribute('id', 'player-container');
    playerBoardContainer.setAttribute('id', 'player-board');
    playerInfo.setAttribute('id', 'player-info');
    enemyContainer.setAttribute('id', 'enemy-container');
    enemyBoardContainer.setAttribute('id', 'enemy-board');
    enemyInfo.setAttribute('id', 'enemy-Info');
    restartButton.setAttribute('id', 'restart');
    footer.setAttribute('id', 'footer');

    pageHeader.classList.add('page-header');

    pageHeader.textContent = "BATTLESHIP";
    gameInfo.innerHTML = `Start attacking by clicking any coordinate in the enemy's board!<hr>&nbsp;`;
    playerInfo.textContent = "Player (You)";
    enemyInfo.textContent = "Enemy (Computer)";
    restartButton.textContent = "Restart";
    footer.innerHTML = "By yours truly,&nbsp;<a href='https://github.com/mraffia'>mraffia</a>";
    
    const playerBoard = player.getPlayerBoard().getBoard();
    const playerCoors = Object.keys(playerBoard);

    for (let i = 0; i < 100; i++) {
        const playerSquare = document.createElement('div');

        playerSquare.setAttribute('id', `player-${playerCoors[i]}`);
        playerSquare.classList.add('player-square');

        if (playerBoard[playerCoors[i]] !== null) {
            playerSquare.style.cssText += "background: gray;";
        }

        playerBoardContainer.appendChild(playerSquare);
    }

    const enemyBoard = enemy.getPlayerBoard().getBoard();
    const enemyCoors = Object.keys(enemyBoard);

    for (let i = 0; i < 100; i++) {
        const enemySquare = document.createElement('div');

        enemySquare.setAttribute('id', `enemy-${enemyCoors[i]}`);
        enemySquare.classList.add('enemy-square');

        if (enemyBoard[enemyCoors[i]] !== null) {
            enemySquare.style.cssText += "background: gray;";
        }

        enemyBoardContainer.appendChild(enemySquare);
    }

    header.appendChild(pageHeader);
    playerContainer.appendChild(playerInfo);
    playerContainer.appendChild(playerBoardContainer);
    enemyContainer.appendChild(enemyInfo);
    enemyContainer.appendChild(enemyBoardContainer);
    allPlayerContainer.appendChild(playerContainer);
    allPlayerContainer.appendChild(enemyContainer);
    content.appendChild(gameInfo);
    content.appendChild(allPlayerContainer);
    content.appendChild(restartButton);
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    return container;
}

export { battlePage };