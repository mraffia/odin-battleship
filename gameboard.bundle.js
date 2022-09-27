"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["gameboard"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/factories/gameboard.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBsZXQgYm9hcmQgPSB7fTtcbiAgY29uc3Qgcm93ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0ge307XG4gICAgbGV0IGNvb3IgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIGNvb3IgPSByb3dbaV0gKyAoaik7XG4gICAgICAgIGJvYXJkW2Nvb3JdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FuUGxhY2VTaGlwID0gKHNoaXAsIGNvb3IsIGF4aXMpID0+IHtcbiAgICBsZXQgdGVtcENvb3IgPSBjb29yO1xuICAgIGxldCBzaGlwUm93ID0gY29vci5jaGFyQXQoMCk7XG4gICAgbGV0IHNoaXBDb2wgPSBjb29yLnNsaWNlKDEpO1xuICAgIGNvbnN0IGFsbENvb3IgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ2hvcicpIHtcbiAgICAgICAgaWYgKGJvYXJkW3RlbXBDb29yXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBbZmFsc2UsIGFsbENvb3JdO1xuICAgICAgICB9IGlmIChib2FyZFt0ZW1wQ29vcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBbZmFsc2UsIGFsbENvb3JdO1xuICAgICAgICB9XG4gICAgICAgIGFsbENvb3IucHVzaCh0ZW1wQ29vcik7XG4gICAgICAgIHNoaXBDb2wgPSBOdW1iZXIoc2hpcENvbCkgKyAxO1xuICAgICAgICB0ZW1wQ29vciA9IHNoaXBSb3cgKyBzaGlwQ29sO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSAndmVyJykge1xuICAgICAgICBpZiAoYm9hcmRbdGVtcENvb3JdICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIFtmYWxzZSwgYWxsQ29vcl07XG4gICAgICAgIH0gaWYgKGJvYXJkW3RlbXBDb29yXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIFtmYWxzZSwgYWxsQ29vcl07XG4gICAgICAgIH1cbiAgICAgICAgYWxsQ29vci5wdXNoKHRlbXBDb29yKTtcbiAgICAgICAgc2hpcFJvdyA9IHJvd1tyb3cuaW5kZXhPZihzaGlwUm93KSArIDFdO1xuICAgICAgICB0ZW1wQ29vciA9IHNoaXBSb3cgKyBzaGlwQ29sO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbdHJ1ZSwgYWxsQ29vcl07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3IsIGF4aXMpID0+IHtcbiAgICBpZiAoY2FuUGxhY2VTaGlwKHNoaXAsIGNvb3IsIGF4aXMpWzBdID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0ZW1wQ29vciA9IGNvb3I7XG4gICAgbGV0IHNoaXBSb3cgPSBjb29yLmNoYXJBdCgwKTtcbiAgICBsZXQgc2hpcENvbCA9IGNvb3Iuc2xpY2UoMSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgYm9hcmRbdGVtcENvb3JdID0gc2hpcDtcbiAgICAgIHNoaXAuc2V0QXJlYSh0ZW1wQ29vcik7XG5cbiAgICAgIGlmIChheGlzID09PSAnaG9yJykge1xuICAgICAgICBzaGlwQ29sID0gTnVtYmVyKHNoaXBDb2wpICsgMTtcbiAgICAgICAgdGVtcENvb3IgPSBzaGlwUm93ICsgc2hpcENvbDtcbiAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3ZlcicpIHtcbiAgICAgICAgc2hpcFJvdyA9IHJvd1tyb3cuaW5kZXhPZihzaGlwUm93KSArIDFdO1xuICAgICAgICB0ZW1wQ29vciA9IHNoaXBSb3cgKyBzaGlwQ29sO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjYW5SZWNlaXZlQXR0YWNrID0gKGNvb3IpID0+IHtcbiAgICBpZiAoYm9hcmRbY29vcl0gPT09ICd4JyB8fCBib2FyZFtjb29yXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBpZiAoYm9hcmRbY29vcl0gIT09IG51bGwpIHtcbiAgICAgIGlmIChib2FyZFtjb29yXS5nZXRBcmVhKClbY29vcl0gPT09ICd4Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcikgPT4ge1xuICAgIGlmIChjYW5SZWNlaXZlQXR0YWNrKGNvb3IpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChib2FyZFtjb29yXSAhPT0gbnVsbCkge1xuICAgICAgYm9hcmRbY29vcl0uaGl0KGNvb3IpO1xuICAgICAgcmV0dXJuICdoaXQnO1xuICAgIH1cblxuICAgIGJvYXJkW2Nvb3JdID0gJ3gnO1xuICAgIHJldHVybiAnbWlzcyc7XG4gIH07XG5cbiAgY29uc3QgYXJlQWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBjb29ycyA9IE9iamVjdC5lbnRyaWVzKGJvYXJkKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb29yc1tpXVsxXSAhPT0gbnVsbCAmJiBjb29yc1tpXVsxXSAhPT0gJ3gnKSB7XG4gICAgICAgIGlmIChjb29yc1tpXVsxXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIGdlbmVyYXRlQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYXJlQWxsU3VuayxcbiAgICBjYW5QbGFjZVNoaXAsXG4gICAgY2FuUmVjZWl2ZUF0dGFjayxcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=