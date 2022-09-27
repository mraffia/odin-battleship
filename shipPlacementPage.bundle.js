"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["shipPlacementPage"],{

/***/ "./src/shipPlacementPage.js":
/*!**********************************!*\
  !*** ./src/shipPlacementPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  pageHeader.textContent = 'BATTLESHIP';
  placementInfo.textContent = 'Place all five of your ships to begin the battle!';
  axisButton.textContent = 'Change to Vertical';
  shipInfo.textContent = 'Placing: Carrier';
  randomizeButton.textContent = 'Randomize Placement';
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipPlacementPage);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/shipPlacementPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcFBsYWNlbWVudFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7O0FBRUEsOENBQThDLGVBQWU7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwUGxhY2VtZW50UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzaGlwUGxhY2VtZW50UGFnZShwbGF5ZXIpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGFjZW1lbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2hpcEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2hpcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gIHBsYWNlbWVudEluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdwbGFjZW1lbnQtaW5mbycpO1xuICBwbGF5ZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItY29udGFpbmVyJyk7XG4gIHBsYXllckJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLWJvYXJkJyk7XG4gIHNoaXBJbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcC1pbmZvLWNvbnRhaW5lcicpO1xuICBzaGlwSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXAtaW5mbycpO1xuICBheGlzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXhpcycpO1xuICByYW5kb21pemVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyYW5kb21pemUnKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuXG4gIHBhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gIHBsYWNlbWVudEluZm8udGV4dENvbnRlbnQgPSAnUGxhY2UgYWxsIGZpdmUgb2YgeW91ciBzaGlwcyB0byBiZWdpbiB0aGUgYmF0dGxlISc7XG4gIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSAnQ2hhbmdlIHRvIFZlcnRpY2FsJztcbiAgc2hpcEluZm8udGV4dENvbnRlbnQgPSAnUGxhY2luZzogQ2Fycmllcic7XG4gIHJhbmRvbWl6ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSYW5kb21pemUgUGxhY2VtZW50JztcbiAgZm9vdGVyLmlubmVySFRNTCA9IFwiQnkgeW91cnMgdHJ1bHksJm5ic3A7PGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL21yYWZmaWEnPm1yYWZmaWE8L2E+XCI7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2V0UGxheWVyQm9hcmQoKS5nZXRCb2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDb29ycyA9IE9iamVjdC5rZXlzKHBsYXllckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgcGxheWVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwbGF5ZXJTcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGBwbGF5ZXItJHtwbGF5ZXJDb29yc1tpXX1gKTtcbiAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNxdWFyZScpO1xuICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnKTtcblxuICAgIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclNxdWFyZSk7XG4gIH1cblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG4gIHNoaXBJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBJbmZvKTtcbiAgc2hpcEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSW5mb0NvbnRhaW5lcik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZENvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxhY2VtZW50SW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChyYW5kb21pemVCdXR0b24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwUGxhY2VtZW50UGFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==