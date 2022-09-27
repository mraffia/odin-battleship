"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["ship"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/factories/ship.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGxlbmd0aCkgPT4ge1xuICBjb25zdCBhcmVhID0ge307XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBnZXRBcmVhID0gKCkgPT4gYXJlYTtcblxuICBjb25zdCBoaXQgPSAoY29vcikgPT4ge1xuICAgIGFyZWFbY29vcl0gPSAneCc7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IGFyZWFzID0gT2JqZWN0LmVudHJpZXMoYXJlYSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZWFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJlYXNbaV1bMV0gPT09ICdvJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0QXJlYSA9IChjb29yKSA9PiB7XG4gICAgYXJlYVtjb29yXSA9ICdvJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFyZWEsXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldEFyZWEsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBzZXRBcmVhLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==