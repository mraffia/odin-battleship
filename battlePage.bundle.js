"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["battlePage"],{

/***/ "./src/battlePage.js":
/*!***************************!*\
  !*** ./src/battlePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  pageHeader.textContent = 'BATTLESHIP';
  gameInfo.innerHTML = 'Start attacking by clicking any coordinate in the enemy\'s board!<hr>&nbsp;';
  playerInfo.textContent = 'Player (You)';
  enemyInfo.textContent = 'Enemy (Computer)';
  restartButton.textContent = 'Restart';
  footer.innerHTML = "By yours truly,&nbsp;<a href='https://github.com/mraffia'>mraffia</a>";

  const playerBoard = player.getPlayerBoard().getBoard();
  const playerCoors = Object.keys(playerBoard);

  for (let i = 0; i < 100; i++) {
    const playerSquare = document.createElement('div');

    playerSquare.setAttribute('id', `player-${playerCoors[i]}`);
    playerSquare.classList.add('player-square');

    if (playerBoard[playerCoors[i]] !== null) {
      playerSquare.style.cssText += 'background: gray;';
    }

    playerBoardContainer.appendChild(playerSquare);
  }

  const enemyBoard = enemy.getPlayerBoard().getBoard();
  const enemyCoors = Object.keys(enemyBoard);

  for (let i = 0; i < 100; i++) {
    const enemySquare = document.createElement('div');

    enemySquare.setAttribute('id', `enemy-${enemyCoors[i]}`);
    enemySquare.classList.add('enemy-square');

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (battlePage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/battlePage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlUGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7O0FBRUEsOENBQThDLGVBQWU7QUFDN0Q7O0FBRUE7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCOztBQUVBLDRDQUE0QyxjQUFjO0FBQzFEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvYmF0dGxlUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBiYXR0bGVQYWdlKHBsYXllciwgZW5lbXkpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYWxsUGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZW5lbXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZW5lbXlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgZW5lbXlCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgZ2FtZUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lLWluZm8nKTtcbiAgYWxsUGxheWVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsLXBsYXllci1jb250YWluZXInKTtcbiAgcGxheWVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLWNvbnRhaW5lcicpO1xuICBwbGF5ZXJCb2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci1ib2FyZCcpO1xuICBwbGF5ZXJJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLWluZm8nKTtcbiAgZW5lbXlDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdlbmVteS1jb250YWluZXInKTtcbiAgZW5lbXlCb2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VuZW15LWJvYXJkJyk7XG4gIGVuZW15SW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VuZW15LUluZm8nKTtcbiAgcmVzdGFydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3RhcnQnKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuXG4gIHBhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gIGdhbWVJbmZvLmlubmVySFRNTCA9ICdTdGFydCBhdHRhY2tpbmcgYnkgY2xpY2tpbmcgYW55IGNvb3JkaW5hdGUgaW4gdGhlIGVuZW15XFwncyBib2FyZCE8aHI+Jm5ic3A7JztcbiAgcGxheWVySW5mby50ZXh0Q29udGVudCA9ICdQbGF5ZXIgKFlvdSknO1xuICBlbmVteUluZm8udGV4dENvbnRlbnQgPSAnRW5lbXkgKENvbXB1dGVyKSc7XG4gIHJlc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzdGFydCc7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSBcIkJ5IHlvdXJzIHRydWx5LCZuYnNwOzxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9tcmFmZmlhJz5tcmFmZmlhPC9hPlwiO1xuXG4gIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyLmdldFBsYXllckJvYXJkKCkuZ2V0Qm9hcmQoKTtcbiAgY29uc3QgcGxheWVyQ29vcnMgPSBPYmplY3Qua2V5cyhwbGF5ZXJCb2FyZCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcGxheWVyU3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcGxheWVyLSR7cGxheWVyQ29vcnNbaV19YCk7XG4gICAgcGxheWVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zcXVhcmUnKTtcblxuICAgIGlmIChwbGF5ZXJCb2FyZFtwbGF5ZXJDb29yc1tpXV0gIT09IG51bGwpIHtcbiAgICAgIHBsYXllclNxdWFyZS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiBncmF5Oyc7XG4gICAgfVxuXG4gICAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyU3F1YXJlKTtcbiAgfVxuXG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBlbmVteS5nZXRQbGF5ZXJCb2FyZCgpLmdldEJvYXJkKCk7XG4gIGNvbnN0IGVuZW15Q29vcnMgPSBPYmplY3Qua2V5cyhlbmVteUJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgZW5lbXlTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGVuZW15U3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZW5lbXktJHtlbmVteUNvb3JzW2ldfWApO1xuICAgIGVuZW15U3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2VuZW15LXNxdWFyZScpO1xuXG4gICAgZW5lbXlCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteVNxdWFyZSk7XG4gIH1cblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJJbmZvKTtcbiAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkQ29udGFpbmVyKTtcbiAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlJbmZvKTtcbiAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlCb2FyZENvbnRhaW5lcik7XG4gIGFsbFBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXIpO1xuICBhbGxQbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVJbmZvKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhbGxQbGF5ZXJDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHJlc3RhcnRCdXR0b24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXR0bGVQYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9