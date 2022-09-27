function shipPlacementPage(player) {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const pageHeader = document.createElement('h1');
    const content = document.createElement('div');
    const placementInfo = document.createElement('p');
    const playerContainer = document.createElement('div');
    const shipInfoContainer = document.createElement('div');
    const shipInfo = document.createElement('h4');
    const axisButton = document.createElement('button');
    const playerBoardContainer = document.createElement('div');
    const randomizeButton = document.createElement('button');
    const footer = document.createElement('div');

    container.setAttribute('id', 'container');
    header.setAttribute('id', 'header');
    content.setAttribute('id', 'content');
    placementInfo.setAttribute('id', 'placement-info');
    playerContainer.setAttribute('id', 'player-container');
    playerBoardContainer.setAttribute('id', 'player-board');
    shipInfoContainer.setAttribute('id', 'ship-info-container');
    shipInfo.setAttribute('id', 'ship-info');
    axisButton.setAttribute('id', 'axis');
    randomizeButton.setAttribute('id', 'randomize');
    footer.setAttribute('id', 'footer');

    pageHeader.classList.add('page-header');

    pageHeader.textContent = "BATTLESHIP";
    placementInfo.textContent = "Place all five of your ships to begin the battle!"
    axisButton.textContent = "Change to Vertical"
    shipInfo.textContent = "Placing: Carrier";
    randomizeButton.textContent = "Randomize Placement";
    footer.innerHTML = "By yours truly,&nbsp;<a href='https://github.com/mraffia'>mraffia</a>";

    const playerBoard = player.getPlayerBoard().getBoard();
    const playerCoors = Object.keys(playerBoard);

    for (let i = 0; i < 100; i++) {
        const playerSquare = document.createElement('div');

        playerSquare.setAttribute('id', `player-${playerCoors[i]}`);
        playerSquare.classList.add('player-square');
        playerSquare.classList.add('placement');

        playerBoardContainer.appendChild(playerSquare);
    }

    header.appendChild(pageHeader);
    shipInfoContainer.appendChild(shipInfo);
    shipInfoContainer.appendChild(axisButton);
    playerContainer.appendChild(shipInfoContainer);
    playerContainer.appendChild(playerBoardContainer);
    content.appendChild(placementInfo);
    content.appendChild(playerContainer);
    content.appendChild(randomizeButton);
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    return container;
}

export { shipPlacementPage };