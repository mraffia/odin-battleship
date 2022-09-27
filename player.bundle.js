"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["player"],{

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
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
});


/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/factories/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((status = 'human') => {
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
    const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5);
    const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4);
    const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3);
    const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3);
    const patrolBoat = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2);

    fleet.Carrier = carrier;
    fleet.Battleship = battleship;
    fleet.Destroyer = destroyer;
    fleet.Submarine = submarine;
    fleet['Patrol Boat'] = patrolBoat;
  };

  const generatePlayerBoard = () => {
    playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
});


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((length) => {
  const area = {};

  const getLength = () => length;
  const getArea = () => area;

  const hit = (coor) => {
    area[coor] = 'x';
  };

  const isSunk = () => {
    const areas = Object.entries(area);

    for (let i = 0; i < areas.length; i++) {
      if (areas[i][1] === 'o') {
        return false;
      }
    }

    return true;
  };

  const setArea = (coor) => {
    area[coor] = 'o';
  };

  return {
    area,
    getLength,
    getArea,
    hit,
    isSunk,
    setArea,
  };
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/factories/player.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIa0M7QUFDVjs7QUFFMUIsaUVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpREFBSTtBQUN4Qix1QkFBdUIsaURBQUk7QUFDM0Isc0JBQXNCLGlEQUFJO0FBQzFCLHNCQUFzQixpREFBSTtBQUMxQix1QkFBdUIsaURBQUk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzREFBUztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLGtCQUFrQjtBQUN0QyxrQkFBa0IsWUFBWSxhQUFhO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkdGLGlFQUFlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBsZXQgYm9hcmQgPSB7fTtcbiAgY29uc3Qgcm93ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0ge307XG4gICAgbGV0IGNvb3IgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIGNvb3IgPSByb3dbaV0gKyAoaik7XG4gICAgICAgIGJvYXJkW2Nvb3JdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FuUGxhY2VTaGlwID0gKHNoaXAsIGNvb3IsIGF4aXMpID0+IHtcbiAgICBsZXQgdGVtcENvb3IgPSBjb29yO1xuICAgIGxldCBzaGlwUm93ID0gY29vci5jaGFyQXQoMCk7XG4gICAgbGV0IHNoaXBDb2wgPSBjb29yLnNsaWNlKDEpO1xuICAgIGNvbnN0IGFsbENvb3IgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ2hvcicpIHtcbiAgICAgICAgaWYgKGJvYXJkW3RlbXBDb29yXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBbZmFsc2UsIGFsbENvb3JdO1xuICAgICAgICB9IGlmIChib2FyZFt0ZW1wQ29vcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBbZmFsc2UsIGFsbENvb3JdO1xuICAgICAgICB9XG4gICAgICAgIGFsbENvb3IucHVzaCh0ZW1wQ29vcik7XG4gICAgICAgIHNoaXBDb2wgPSBOdW1iZXIoc2hpcENvbCkgKyAxO1xuICAgICAgICB0ZW1wQ29vciA9IHNoaXBSb3cgKyBzaGlwQ29sO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSAndmVyJykge1xuICAgICAgICBpZiAoYm9hcmRbdGVtcENvb3JdICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIFtmYWxzZSwgYWxsQ29vcl07XG4gICAgICAgIH0gaWYgKGJvYXJkW3RlbXBDb29yXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIFtmYWxzZSwgYWxsQ29vcl07XG4gICAgICAgIH1cbiAgICAgICAgYWxsQ29vci5wdXNoKHRlbXBDb29yKTtcbiAgICAgICAgc2hpcFJvdyA9IHJvd1tyb3cuaW5kZXhPZihzaGlwUm93KSArIDFdO1xuICAgICAgICB0ZW1wQ29vciA9IHNoaXBSb3cgKyBzaGlwQ29sO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbdHJ1ZSwgYWxsQ29vcl07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3IsIGF4aXMpID0+IHtcbiAgICBpZiAoY2FuUGxhY2VTaGlwKHNoaXAsIGNvb3IsIGF4aXMpWzBdID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0ZW1wQ29vciA9IGNvb3I7XG4gICAgbGV0IHNoaXBSb3cgPSBjb29yLmNoYXJBdCgwKTtcbiAgICBsZXQgc2hpcENvbCA9IGNvb3Iuc2xpY2UoMSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgYm9hcmRbdGVtcENvb3JdID0gc2hpcDtcbiAgICAgIHNoaXAuc2V0QXJlYSh0ZW1wQ29vcik7XG5cbiAgICAgIGlmIChheGlzID09PSAnaG9yJykge1xuICAgICAgICBzaGlwQ29sID0gTnVtYmVyKHNoaXBDb2wpICsgMTtcbiAgICAgICAgdGVtcENvb3IgPSBzaGlwUm93ICsgc2hpcENvbDtcbiAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3ZlcicpIHtcbiAgICAgICAgc2hpcFJvdyA9IHJvd1tyb3cuaW5kZXhPZihzaGlwUm93KSArIDFdO1xuICAgICAgICB0ZW1wQ29vciA9IHNoaXBSb3cgKyBzaGlwQ29sO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjYW5SZWNlaXZlQXR0YWNrID0gKGNvb3IpID0+IHtcbiAgICBpZiAoYm9hcmRbY29vcl0gPT09ICd4JyB8fCBib2FyZFtjb29yXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBpZiAoYm9hcmRbY29vcl0gIT09IG51bGwpIHtcbiAgICAgIGlmIChib2FyZFtjb29yXS5nZXRBcmVhKClbY29vcl0gPT09ICd4Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcikgPT4ge1xuICAgIGlmIChjYW5SZWNlaXZlQXR0YWNrKGNvb3IpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChib2FyZFtjb29yXSAhPT0gbnVsbCkge1xuICAgICAgYm9hcmRbY29vcl0uaGl0KGNvb3IpO1xuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cblxuICAgIGJvYXJkW2Nvb3JdID0gJ3gnO1xuICAgIHJldHVybiAnbWlzcyc7XG4gIH07XG5cbiAgY29uc3QgYXJlQWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBjb29ycyA9IE9iamVjdC5lbnRyaWVzKGJvYXJkKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb29yc1tpXVsxXSAhPT0gbnVsbCAmJiBjb29yc1tpXVsxXSAhPT0gJ3gnKSB7XG4gICAgICAgIGlmIChjb29yc1tpXVsxXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIGdlbmVyYXRlQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYXJlQWxsU3VuayxcbiAgICBjYW5QbGFjZVNoaXAsXG4gICAgY2FuUmVjZWl2ZUF0dGFjayxcbiAgfTtcbn07XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0dXMgPSAnaHVtYW4nKSA9PiB7XG4gIGxldCBmbGVldCA9IHt9O1xuICBsZXQgcGxheWVyQm9hcmQ7XG5cbiAgY29uc3Qgcm93ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gIGNvbnN0IGNvbCA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcbiAgY29uc3QgYXhpcyA9IFsnaG9yJywgJ3ZlciddO1xuXG4gIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1cztcbiAgY29uc3QgZ2V0RmxlZXQgPSAoKSA9PiBmbGVldDtcbiAgY29uc3QgZ2V0UGxheWVyQm9hcmQgPSAoKSA9PiBwbGF5ZXJCb2FyZDtcblxuICBjb25zdCBnZW5lcmF0ZUZsZWV0ID0gKCkgPT4ge1xuICAgIGZsZWV0ID0ge307XG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoNSk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCk7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBTaGlwKDIpO1xuXG4gICAgZmxlZXQuQ2FycmllciA9IGNhcnJpZXI7XG4gICAgZmxlZXQuQmF0dGxlc2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgZmxlZXQuRGVzdHJveWVyID0gZGVzdHJveWVyO1xuICAgIGZsZWV0LlN1Ym1hcmluZSA9IHN1Ym1hcmluZTtcbiAgICBmbGVldFsnUGF0cm9sIEJvYXQnXSA9IHBhdHJvbEJvYXQ7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVQbGF5ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBwbGF5ZXJCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgIHBsYXllckJvYXJkLmdlbmVyYXRlQm9hcmQoKTtcbiAgfTtcblxuICBjb25zdCByYW5kb21QbGFjZW1lbnRzID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkLmdlbmVyYXRlQm9hcmQoKTtcblxuICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LmVudHJpZXMoZmxlZXQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJhblJvdzsgbGV0IHJhbkNvbDsgbGV0IHJhbkF4aXM7IGxldFxuICAgICAgICBjb29yO1xuXG4gICAgICBsZXQgcGxhY2UgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghcGxhY2UpIHtcbiAgICAgICAgcmFuUm93ID0gcm93W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvdy5sZW5ndGgpXTtcbiAgICAgICAgcmFuQ29sID0gY29sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbC5sZW5ndGgpXTtcbiAgICAgICAgcmFuQXhpcyA9IGF4aXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhpcy5sZW5ndGgpXTtcbiAgICAgICAgY29vciA9IHJhblJvdyArIHJhbkNvbDtcblxuICAgICAgICBpZiAocGxheWVyQm9hcmQuY2FuUGxhY2VTaGlwKGZsZWV0W3NoaXBzW2ldWzBdXSwgY29vciwgcmFuQXhpcylbMF0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuY2FuUGxhY2VTaGlwKGZsZWV0W3NoaXBzW2ldWzBdXSwgY29vciwgcmFuQXhpcylbMF0gPT09IHRydWUpIHtcbiAgICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoZmxlZXRbc2hpcHNbaV1bMF1dLCBjb29yLCByYW5BeGlzKTtcbiAgICAgICAgICBwbGFjZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrID0gKGNvb3IsIGVuZW15KSA9PiB7XG4gICAgaWYgKGVuZW15LmdldFBsYXllckJvYXJkKCkuY2FuUmVjZWl2ZUF0dGFjayhjb29yKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgYXR0YWNrRW5lbXkgPSBlbmVteS5nZXRQbGF5ZXJCb2FyZCgpLnJlY2VpdmVBdHRhY2soY29vcik7XG4gICAgICByZXR1cm4gYXR0YWNrRW5lbXk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZU9uZVNoaXAgPSAoc2hpcCwgY29vciwgYm9hcmRBeGlzKSA9PiB7XG4gICAgaWYgKHBsYXllckJvYXJkLmNhblBsYWNlU2hpcChzaGlwLCBjb29yLCBib2FyZEF4aXMpWzBdID09PSB0cnVlKSB7XG4gICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vciwgYm9hcmRBeGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGVuZW15KSA9PiB7XG4gICAgbGV0IHJhblJvdzsgbGV0IHJhbkNvbDsgbGV0XG4gICAgICBjb29yO1xuXG4gICAgbGV0IGF0dGFja0VuZW15ID0gZmFsc2U7XG4gICAgd2hpbGUgKCFhdHRhY2tFbmVteSkge1xuICAgICAgcmFuUm93ID0gcm93W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvdy5sZW5ndGgpXTtcbiAgICAgIHJhbkNvbCA9IGNvbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2wubGVuZ3RoKV07XG4gICAgICBjb29yID0gcmFuUm93ICsgcmFuQ29sO1xuICAgICAgYXR0YWNrRW5lbXkgPSBhdHRhY2soY29vciwgZW5lbXkpO1xuICAgIH1cblxuICAgIHJldHVybiBbY29vciwgYXR0YWNrRW5lbXldO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0U3RhdHVzLFxuICAgIGdldEZsZWV0LFxuICAgIGdldFBsYXllckJvYXJkLFxuICAgIGdlbmVyYXRlRmxlZXQsXG4gICAgZ2VuZXJhdGVQbGF5ZXJCb2FyZCxcbiAgICByYW5kb21QbGFjZW1lbnRzLFxuICAgIGF0dGFjayxcbiAgICBwbGFjZU9uZVNoaXAsXG4gICAgcmFuZG9tQXR0YWNrLFxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChsZW5ndGgpID0+IHtcbiAgY29uc3QgYXJlYSA9IHt9O1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgY29uc3QgZ2V0QXJlYSA9ICgpID0+IGFyZWE7XG5cbiAgY29uc3QgaGl0ID0gKGNvb3IpID0+IHtcbiAgICBhcmVhW2Nvb3JdID0gJ3gnO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBhcmVhcyA9IE9iamVjdC5lbnRyaWVzKGFyZWEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmVhcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyZWFzW2ldWzFdID09PSAnbycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNldEFyZWEgPSAoY29vcikgPT4ge1xuICAgIGFyZWFbY29vcl0gPSAnbyc7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhcmVhLFxuICAgIGdldExlbmd0aCxcbiAgICBnZXRBcmVhLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgc2V0QXJlYSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=