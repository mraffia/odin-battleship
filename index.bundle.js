"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: -apple-system,system-ui,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n    margin: 0;\n}\n\n#container {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    align-items: center;\n}\n\n#header {\n    padding-top: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1, h2, p {\n    flex: 1;\n    text-align: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#all-player-container {\n    display: grid;\n    grid-template-areas: \n    \"player-board enemy-board\";\n}\n\n#player-container,\n#enemy-container {\n    margin-right: 40px;\n    margin-left: 40px;\n}\n\n#ship-info-container {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n\n#ship-info {\n    margin: 0px;\n    align-self: center;\n}\n\n#player-board,\n#enemy-board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 400px;\n    height: 400px;\n    border: 4px solid black;\n    margin-top: 16px;\n    border-radius: 4px;\n}\n\n.player-square,\n.enemy-square {\n    flex: 1;\n    background: white;\n    border: 1px solid black;\n    padding: 19px;\n}\n\n.enemy-square {\n    cursor: pointer;\n}\n\n.placement:hover {\n    background: lightgray;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.enemy-square:hover {\n    background: lightgray;\n    text-decoration: none;\n}\n\n.hit {\n    background: lightcoral;\n}\n\n.miss {\n    background: lightgreen;\n}\n\n.buttons-container {\n    display: flex;\n}\n\n#confirm,\n#randomize {\n    margin-right: 10px;\n    margin-left: 10px;\n}\n\n#footer {\n    padding: 32px;\n    margin-top: auto;\n}\n\n/* Source: https://getcssscan.com/css-buttons-examples */\nbutton {\n    margin-top: 32px;\n    appearance: none;\n    background-color: #FAFBFC;\n    border: 1px solid rgba(27, 31, 35, 0.15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;\n    box-sizing: border-box;\n    color: #24292E;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system,system-ui,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n    list-style: none;\n    padding: 6px 16px;\n    position: relative;\n    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n    word-wrap: break-word;\n}\n\nbutton:hover {\n    background-color: #F3F4F6;\n    text-decoration: none;\n    transition-duration: 0.1s;\n}\n\nbutton:disabled {\n    background-color: #FAFBFC;\n    border-color: rgba(27, 31, 35, 0.15);\n    color: #959DA5;\n    cursor: default;\n}\n\nbutton:active {\n    background-color: #EDEFF2;\n    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;\n    transition: none 0s;\n}\n\nbutton:focus {\n    outline: 1px transparent;\n}\n\nbutton:before {\n    display: none;\n}\n\nbutton:-webkit-details-marker {\n    display: none;\n}\n\n#axis {\n    margin-top: 0px;\n    align-self: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,+GAA+G;IAC/G,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb;8BAC0B;AAC9B;;AAEA;;IAEI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,OAAO;IACP,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,wDAAwD;AACxD;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,wCAAwC;IACxC,kBAAkB;IAClB,mFAAmF;IACnF,sBAAsB;IACtB,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,+GAA+G;IAC/G,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,8DAA8D;IAC9D,iBAAiB;IACjB,yBAAyB;IACzB,0BAA0B;IAC1B,sBAAsB;IACtB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,oCAAoC;IACpC,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,kDAAkD;IAClD,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["body {\n    font-family: -apple-system,system-ui,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n    margin: 0;\n}\n\n#container {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    align-items: center;\n}\n\n#header {\n    padding-top: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1, h2, p {\n    flex: 1;\n    text-align: center;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#all-player-container {\n    display: grid;\n    grid-template-areas: \n    \"player-board enemy-board\";\n}\n\n#player-container,\n#enemy-container {\n    margin-right: 40px;\n    margin-left: 40px;\n}\n\n#ship-info-container {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n\n#ship-info {\n    margin: 0px;\n    align-self: center;\n}\n\n#player-board,\n#enemy-board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 400px;\n    height: 400px;\n    border: 4px solid black;\n    margin-top: 16px;\n    border-radius: 4px;\n}\n\n.player-square,\n.enemy-square {\n    flex: 1;\n    background: white;\n    border: 1px solid black;\n    padding: 19px;\n}\n\n.enemy-square {\n    cursor: pointer;\n}\n\n.placement:hover {\n    background: lightgray;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.enemy-square:hover {\n    background: lightgray;\n    text-decoration: none;\n}\n\n.hit {\n    background: lightcoral;\n}\n\n.miss {\n    background: lightgreen;\n}\n\n.buttons-container {\n    display: flex;\n}\n\n#confirm,\n#randomize {\n    margin-right: 10px;\n    margin-left: 10px;\n}\n\n#footer {\n    padding: 32px;\n    margin-top: auto;\n}\n\n/* Source: https://getcssscan.com/css-buttons-examples */\nbutton {\n    margin-top: 32px;\n    appearance: none;\n    background-color: #FAFBFC;\n    border: 1px solid rgba(27, 31, 35, 0.15);\n    border-radius: 6px;\n    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;\n    box-sizing: border-box;\n    color: #24292E;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system,system-ui,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 20px;\n    list-style: none;\n    padding: 6px 16px;\n    position: relative;\n    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n    word-wrap: break-word;\n}\n\nbutton:hover {\n    background-color: #F3F4F6;\n    text-decoration: none;\n    transition-duration: 0.1s;\n}\n\nbutton:disabled {\n    background-color: #FAFBFC;\n    border-color: rgba(27, 31, 35, 0.15);\n    color: #959DA5;\n    cursor: default;\n}\n\nbutton:active {\n    background-color: #EDEFF2;\n    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;\n    transition: none 0s;\n}\n\nbutton:focus {\n    outline: 1px transparent;\n}\n\nbutton:before {\n    display: none;\n}\n\nbutton:-webkit-details-marker {\n    display: none;\n}\n\n#axis {\n    margin-top: 0px;\n    align-self: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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


/***/ }),

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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ "./src/factories/player.js");
/* harmony import */ var _battlePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battlePage */ "./src/battlePage.js");
/* harmony import */ var _shipPlacementPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipPlacementPage */ "./src/shipPlacementPage.js");





function start() {
  while (document.body.hasChildNodes()) {
    document.body.removeChild(document.body.firstChild);
  }

  const playerOne = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const computer = (0,_factories_player__WEBPACK_IMPORTED_MODULE_1__["default"])('computer');

  playerOne.generateFleet();
  computer.generateFleet();

  playerOne.generatePlayerBoard();
  computer.generatePlayerBoard();

  const playerBoard = playerOne.getPlayerBoard().getBoard();
  const playerCoors = Object.keys(playerBoard);

  const playerFleet = playerOne.getFleet();
  const playerShips = Object.keys(playerFleet);

  computer.randomPlacements();

  document.body.appendChild((0,_shipPlacementPage__WEBPACK_IMPORTED_MODULE_3__["default"])(playerOne));

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

  document.body.appendChild((0,_battlePage__WEBPACK_IMPORTED_MODULE_2__["default"])(playerOne, computer));

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


/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0RBQW9ELGdCQUFnQixhQUFhLGVBQWU7QUFDaEc7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLFdBQVcsTUFBTSxVQUFVO0FBQ3pELEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjs7QUFFQSw4Q0FBOEMsZUFBZTtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVQYWdlLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXBQbGFjZW1lbnRQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiU2Vnb2UgVUlcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxLCBoMiwgcCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FsbC1wbGF5ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJwbGF5ZXItYm9hcmQgZW5lbXktYm9hcmRcXFwiO1xcbn1cXG5cXG4jcGxheWVyLWNvbnRhaW5lcixcXG4jZW5lbXktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuI3NoaXAtaW5mby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNzaGlwLWluZm8ge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLFxcbiNlbmVteS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ucGxheWVyLXNxdWFyZSxcXG4uZW5lbXktc3F1YXJlIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxOXB4O1xcbn1cXG5cXG4uZW5lbXktc3F1YXJlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxhY2VtZW50OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmVuZW15LXNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jY29uZmlybSxcXG4jcmFuZG9taXplIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi8qIFNvdXJjZTogaHR0cHM6Ly9nZXRjc3NzY2FuLmNvbS9jc3MtYnV0dG9ucy1leGFtcGxlcyAqL1xcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZCRkM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4xNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNywgMzEsIDM1LCAwLjA0KSAwIDFweCAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpIDAgMXB4IDAgaW5zZXQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiAjMjQyOTJFO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLFxcXCJTZWdvZSBVSVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgRW1vamlcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC41LCAxKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0RjY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkJGQztcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpO1xcbiAgICBjb2xvcjogIzk1OURBNTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERUZGMjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyMjUsIDIyOCwgMjMyLCAwLjIpIDAgMXB4IDAgaW5zZXQ7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgMHM7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDFweCB0cmFuc3BhcmVudDtcXG59XFxuXFxuYnV0dG9uOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjotd2Via2l0LWRldGFpbHMtbWFya2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2F4aXMge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtHQUErRztJQUMvRyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYjs4QkFDMEI7QUFDOUI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQSx3REFBd0Q7QUFDeEQ7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLG1GQUFtRjtJQUNuRixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsK0dBQStHO0lBQy9HLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrREFBa0Q7SUFDbEQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXFxcIlNlZ29lIFVJXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSwgaDIsIHAge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhbGwtcGxheWVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwicGxheWVyLWJvYXJkIGVuZW15LWJvYXJkXFxcIjtcXG59XFxuXFxuI3BsYXllci1jb250YWluZXIsXFxuI2VuZW15LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbiNzaGlwLWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jc2hpcC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1ib2FyZCxcXG4jZW5lbXktYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnBsYXllci1zcXVhcmUsXFxuLmVuZW15LXNxdWFyZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTlweDtcXG59XFxuXFxuLmVuZW15LXNxdWFyZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYWNlbWVudDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5lbmVteS1zcXVhcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2NvbmZpcm0sXFxuI3JhbmRvbWl6ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4vKiBTb3VyY2U6IGh0dHBzOi8vZ2V0Y3Nzc2Nhbi5jb20vY3NzLWJ1dHRvbnMtZXhhbXBsZXMgKi9cXG5idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQkZDO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjcsIDMxLCAzNSwgMC4wNCkgMCAxcHggMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSAwIDFweCAwIGluc2V0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogIzI0MjkyRTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiU2Vnb2UgVUlcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjMsIDAsIDAuNSwgMSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEY2O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZCRkM7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjE1KTtcXG4gICAgY29sb3I6ICM5NTlEQTU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVGRjI7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjI1LCAyMjgsIDIzMiwgMC4yKSAwIDFweCAwIGluc2V0O1xcbiAgICB0cmFuc2l0aW9uOiBub25lIDBzO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAxcHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbmJ1dHRvbjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b246LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNheGlzIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYmF0dGxlUGFnZShwbGF5ZXIsIGVuZW15KSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ2FtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGFsbFBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVuZW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVuZW15SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGVuZW15Qm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gIGdhbWVJbmZvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FtZS1pbmZvJyk7XG4gIGFsbFBsYXllckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsbC1wbGF5ZXItY29udGFpbmVyJyk7XG4gIHBsYXllckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci1jb250YWluZXInKTtcbiAgcGxheWVyQm9hcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItYm9hcmQnKTtcbiAgcGxheWVySW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllci1pbmZvJyk7XG4gIGVuZW15Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW5lbXktY29udGFpbmVyJyk7XG4gIGVuZW15Qm9hcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdlbmVteS1ib2FyZCcpO1xuICBlbmVteUluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdlbmVteS1JbmZvJyk7XG4gIHJlc3RhcnRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXJ0Jyk7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuXG4gIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXInKTtcblxuICBwYWdlSGVhZGVyLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICBnYW1lSW5mby5pbm5lckhUTUwgPSAnU3RhcnQgYXR0YWNraW5nIGJ5IGNsaWNraW5nIGFueSBjb29yZGluYXRlIGluIHRoZSBlbmVteVxcJ3MgYm9hcmQhPGhyPiZuYnNwOyc7XG4gIHBsYXllckluZm8udGV4dENvbnRlbnQgPSAnUGxheWVyIChZb3UpJztcbiAgZW5lbXlJbmZvLnRleHRDb250ZW50ID0gJ0VuZW15IChDb21wdXRlciknO1xuICByZXN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnO1xuICBmb290ZXIuaW5uZXJIVE1MID0gXCJCeSB5b3VycyB0cnVseSwmbmJzcDs8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vbXJhZmZpYSc+bXJhZmZpYTwvYT5cIjtcblxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IHBsYXllci5nZXRQbGF5ZXJCb2FyZCgpLmdldEJvYXJkKCk7XG4gIGNvbnN0IHBsYXllckNvb3JzID0gT2JqZWN0LmtleXMocGxheWVyQm9hcmQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBwbGF5ZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHBsYXllci0ke3BsYXllckNvb3JzW2ldfWApO1xuICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc3F1YXJlJyk7XG5cbiAgICBpZiAocGxheWVyQm9hcmRbcGxheWVyQ29vcnNbaV1dICE9PSBudWxsKSB7XG4gICAgICBwbGF5ZXJTcXVhcmUuc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogZ3JheTsnO1xuICAgIH1cblxuICAgIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclNxdWFyZSk7XG4gIH1cblxuICBjb25zdCBlbmVteUJvYXJkID0gZW5lbXkuZ2V0UGxheWVyQm9hcmQoKS5nZXRCb2FyZCgpO1xuICBjb25zdCBlbmVteUNvb3JzID0gT2JqZWN0LmtleXMoZW5lbXlCb2FyZCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IGVuZW15U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBlbmVteVNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGVuZW15LSR7ZW5lbXlDb29yc1tpXX1gKTtcbiAgICBlbmVteVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdlbmVteS1zcXVhcmUnKTtcblxuICAgIGVuZW15Qm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlTcXVhcmUpO1xuICB9XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xuICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVySW5mbyk7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZENvbnRhaW5lcik7XG4gIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15SW5mbyk7XG4gIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmRDb250YWluZXIpO1xuICBhbGxQbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcbiAgYWxsUGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Q29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChnYW1lSW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWxsUGxheWVyQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChyZXN0YXJ0QnV0dG9uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmF0dGxlUGFnZTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGV0IGJvYXJkID0ge307XG4gIGNvbnN0IHJvdyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZCA9IHt9O1xuICAgIGxldCBjb29yID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICBjb29yID0gcm93W2ldICsgKGopO1xuICAgICAgICBib2FyZFtjb29yXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNhblBsYWNlU2hpcCA9IChzaGlwLCBjb29yLCBheGlzKSA9PiB7XG4gICAgbGV0IHRlbXBDb29yID0gY29vcjtcbiAgICBsZXQgc2hpcFJvdyA9IGNvb3IuY2hhckF0KDApO1xuICAgIGxldCBzaGlwQ29sID0gY29vci5zbGljZSgxKTtcbiAgICBjb25zdCBhbGxDb29yID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgaWYgKGF4aXMgPT09ICdob3InKSB7XG4gICAgICAgIGlmIChib2FyZFt0ZW1wQ29vcl0gIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gW2ZhbHNlLCBhbGxDb29yXTtcbiAgICAgICAgfSBpZiAoYm9hcmRbdGVtcENvb3JdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gW2ZhbHNlLCBhbGxDb29yXTtcbiAgICAgICAgfVxuICAgICAgICBhbGxDb29yLnB1c2godGVtcENvb3IpO1xuICAgICAgICBzaGlwQ29sID0gTnVtYmVyKHNoaXBDb2wpICsgMTtcbiAgICAgICAgdGVtcENvb3IgPSBzaGlwUm93ICsgc2hpcENvbDtcbiAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3ZlcicpIHtcbiAgICAgICAgaWYgKGJvYXJkW3RlbXBDb29yXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBbZmFsc2UsIGFsbENvb3JdO1xuICAgICAgICB9IGlmIChib2FyZFt0ZW1wQ29vcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBbZmFsc2UsIGFsbENvb3JdO1xuICAgICAgICB9XG4gICAgICAgIGFsbENvb3IucHVzaCh0ZW1wQ29vcik7XG4gICAgICAgIHNoaXBSb3cgPSByb3dbcm93LmluZGV4T2Yoc2hpcFJvdykgKyAxXTtcbiAgICAgICAgdGVtcENvb3IgPSBzaGlwUm93ICsgc2hpcENvbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3RydWUsIGFsbENvb3JdO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yLCBheGlzKSA9PiB7XG4gICAgaWYgKGNhblBsYWNlU2hpcChzaGlwLCBjb29yLCBheGlzKVswXSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGVtcENvb3IgPSBjb29yO1xuICAgIGxldCBzaGlwUm93ID0gY29vci5jaGFyQXQoMCk7XG4gICAgbGV0IHNoaXBDb2wgPSBjb29yLnNsaWNlKDEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgIGJvYXJkW3RlbXBDb29yXSA9IHNoaXA7XG4gICAgICBzaGlwLnNldEFyZWEodGVtcENvb3IpO1xuXG4gICAgICBpZiAoYXhpcyA9PT0gJ2hvcicpIHtcbiAgICAgICAgc2hpcENvbCA9IE51bWJlcihzaGlwQ29sKSArIDE7XG4gICAgICAgIHRlbXBDb29yID0gc2hpcFJvdyArIHNoaXBDb2w7XG4gICAgICB9IGVsc2UgaWYgKGF4aXMgPT09ICd2ZXInKSB7XG4gICAgICAgIHNoaXBSb3cgPSByb3dbcm93LmluZGV4T2Yoc2hpcFJvdykgKyAxXTtcbiAgICAgICAgdGVtcENvb3IgPSBzaGlwUm93ICsgc2hpcENvbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FuUmVjZWl2ZUF0dGFjayA9IChjb29yKSA9PiB7XG4gICAgaWYgKGJvYXJkW2Nvb3JdID09PSAneCcgfHwgYm9hcmRbY29vcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gaWYgKGJvYXJkW2Nvb3JdICE9PSBudWxsKSB7XG4gICAgICBpZiAoYm9hcmRbY29vcl0uZ2V0QXJlYSgpW2Nvb3JdID09PSAneCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3IpID0+IHtcbiAgICBpZiAoY2FuUmVjZWl2ZUF0dGFjayhjb29yKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYm9hcmRbY29vcl0gIT09IG51bGwpIHtcbiAgICAgIGJvYXJkW2Nvb3JdLmhpdChjb29yKTtcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG5cbiAgICBib2FyZFtjb29yXSA9ICd4JztcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgY29vcnMgPSBPYmplY3QuZW50cmllcyhib2FyZCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29vcnNbaV1bMV0gIT09IG51bGwgJiYgY29vcnNbaV1bMV0gIT09ICd4Jykge1xuICAgICAgICBpZiAoY29vcnNbaV1bMV0uaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRCb2FyZCxcbiAgICBnZW5lcmF0ZUJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFyZUFsbFN1bmssXG4gICAgY2FuUGxhY2VTaGlwLFxuICAgIGNhblJlY2VpdmVBdHRhY2ssXG4gIH07XG59O1xuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdHVzID0gJ2h1bWFuJykgPT4ge1xuICBsZXQgZmxlZXQgPSB7fTtcbiAgbGV0IHBsYXllckJvYXJkO1xuXG4gIGNvbnN0IHJvdyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBjb25zdCBjb2wgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gIGNvbnN0IGF4aXMgPSBbJ2hvcicsICd2ZXInXTtcblxuICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG4gIGNvbnN0IGdldEZsZWV0ID0gKCkgPT4gZmxlZXQ7XG4gIGNvbnN0IGdldFBsYXllckJvYXJkID0gKCkgPT4gcGxheWVyQm9hcmQ7XG5cbiAgY29uc3QgZ2VuZXJhdGVGbGVldCA9ICgpID0+IHtcbiAgICBmbGVldCA9IHt9O1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMyk7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzKTtcbiAgICBjb25zdCBwYXRyb2xCb2F0ID0gU2hpcCgyKTtcblxuICAgIGZsZWV0LkNhcnJpZXIgPSBjYXJyaWVyO1xuICAgIGZsZWV0LkJhdHRsZXNoaXAgPSBiYXR0bGVzaGlwO1xuICAgIGZsZWV0LkRlc3Ryb3llciA9IGRlc3Ryb3llcjtcbiAgICBmbGVldC5TdWJtYXJpbmUgPSBzdWJtYXJpbmU7XG4gICAgZmxlZXRbJ1BhdHJvbCBCb2F0J10gPSBwYXRyb2xCb2F0O1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgICBwbGF5ZXJCb2FyZC5nZW5lcmF0ZUJvYXJkKCk7XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tUGxhY2VtZW50cyA9ICgpID0+IHtcbiAgICBwbGF5ZXJCb2FyZC5nZW5lcmF0ZUJvYXJkKCk7XG5cbiAgICBjb25zdCBzaGlwcyA9IE9iamVjdC5lbnRyaWVzKGZsZWV0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByYW5Sb3c7IGxldCByYW5Db2w7IGxldCByYW5BeGlzOyBsZXRcbiAgICAgICAgY29vcjtcblxuICAgICAgbGV0IHBsYWNlID0gZmFsc2U7XG4gICAgICB3aGlsZSAoIXBsYWNlKSB7XG4gICAgICAgIHJhblJvdyA9IHJvd1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3cubGVuZ3RoKV07XG4gICAgICAgIHJhbkNvbCA9IGNvbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2wubGVuZ3RoKV07XG4gICAgICAgIHJhbkF4aXMgPSBheGlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF4aXMubGVuZ3RoKV07XG4gICAgICAgIGNvb3IgPSByYW5Sb3cgKyByYW5Db2w7XG5cbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmNhblBsYWNlU2hpcChmbGVldFtzaGlwc1tpXVswXV0sIGNvb3IsIHJhbkF4aXMpWzBdID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmNhblBsYWNlU2hpcChmbGVldFtzaGlwc1tpXVswXV0sIGNvb3IsIHJhbkF4aXMpWzBdID09PSB0cnVlKSB7XG4gICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKGZsZWV0W3NoaXBzW2ldWzBdXSwgY29vciwgcmFuQXhpcyk7XG4gICAgICAgICAgcGxhY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGF0dGFjayA9IChjb29yLCBlbmVteSkgPT4ge1xuICAgIGlmIChlbmVteS5nZXRQbGF5ZXJCb2FyZCgpLmNhblJlY2VpdmVBdHRhY2soY29vcikgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGF0dGFja0VuZW15ID0gZW5lbXkuZ2V0UGxheWVyQm9hcmQoKS5yZWNlaXZlQXR0YWNrKGNvb3IpO1xuICAgICAgcmV0dXJuIGF0dGFja0VuZW15O1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VPbmVTaGlwID0gKHNoaXAsIGNvb3IsIGJvYXJkQXhpcykgPT4ge1xuICAgIGlmIChwbGF5ZXJCb2FyZC5jYW5QbGFjZVNoaXAoc2hpcCwgY29vciwgYm9hcmRBeGlzKVswXSA9PT0gdHJ1ZSkge1xuICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3IsIGJvYXJkQXhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChlbmVteSkgPT4ge1xuICAgIGxldCByYW5Sb3c7IGxldCByYW5Db2w7IGxldFxuICAgICAgY29vcjtcblxuICAgIGxldCBhdHRhY2tFbmVteSA9IGZhbHNlO1xuICAgIHdoaWxlICghYXR0YWNrRW5lbXkpIHtcbiAgICAgIHJhblJvdyA9IHJvd1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3cubGVuZ3RoKV07XG4gICAgICByYW5Db2wgPSBjb2xbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sLmxlbmd0aCldO1xuICAgICAgY29vciA9IHJhblJvdyArIHJhbkNvbDtcbiAgICAgIGF0dGFja0VuZW15ID0gYXR0YWNrKGNvb3IsIGVuZW15KTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2Nvb3IsIGF0dGFja0VuZW15XTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFN0YXR1cyxcbiAgICBnZXRGbGVldCxcbiAgICBnZXRQbGF5ZXJCb2FyZCxcbiAgICBnZW5lcmF0ZUZsZWV0LFxuICAgIGdlbmVyYXRlUGxheWVyQm9hcmQsXG4gICAgcmFuZG9tUGxhY2VtZW50cyxcbiAgICBhdHRhY2ssXG4gICAgcGxhY2VPbmVTaGlwLFxuICAgIHJhbmRvbUF0dGFjayxcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGFyZWEgPSB7fTtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIGNvbnN0IGdldEFyZWEgPSAoKSA9PiBhcmVhO1xuXG4gIGNvbnN0IGhpdCA9IChjb29yKSA9PiB7XG4gICAgYXJlYVtjb29yXSA9ICd4JztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJlYXMgPSBPYmplY3QuZW50cmllcyhhcmVhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJlYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcmVhc1tpXVsxXSA9PT0gJ28nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZXRBcmVhID0gKGNvb3IpID0+IHtcbiAgICBhcmVhW2Nvb3JdID0gJ28nO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYXJlYSxcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0QXJlYSxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIHNldEFyZWEsXG4gIH07XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vZmFjdG9yaWVzL3BsYXllcic7XG5pbXBvcnQgYmF0dGxlUGFnZSBmcm9tICcuL2JhdHRsZVBhZ2UnO1xuaW1wb3J0IHNoaXBQbGFjZW1lbnRQYWdlIGZyb20gJy4vc2hpcFBsYWNlbWVudFBhZ2UnO1xuXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgd2hpbGUgKGRvY3VtZW50LmJvZHkuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCdjb21wdXRlcicpO1xuXG4gIHBsYXllck9uZS5nZW5lcmF0ZUZsZWV0KCk7XG4gIGNvbXB1dGVyLmdlbmVyYXRlRmxlZXQoKTtcblxuICBwbGF5ZXJPbmUuZ2VuZXJhdGVQbGF5ZXJCb2FyZCgpO1xuICBjb21wdXRlci5nZW5lcmF0ZVBsYXllckJvYXJkKCk7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXJPbmUuZ2V0UGxheWVyQm9hcmQoKS5nZXRCb2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDb29ycyA9IE9iamVjdC5rZXlzKHBsYXllckJvYXJkKTtcblxuICBjb25zdCBwbGF5ZXJGbGVldCA9IHBsYXllck9uZS5nZXRGbGVldCgpO1xuICBjb25zdCBwbGF5ZXJTaGlwcyA9IE9iamVjdC5rZXlzKHBsYXllckZsZWV0KTtcblxuICBjb21wdXRlci5yYW5kb21QbGFjZW1lbnRzKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGlwUGxhY2VtZW50UGFnZShwbGF5ZXJPbmUpKTtcblxuICBjb25zdCBzaGlwSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwLWluZm8nKTtcbiAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNheGlzJyk7XG4gIGNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb21pemUnKTtcbiAgY29uc3QgcGxheWVyU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItYm9hcmQnKTtcbiAgY29uc3QgcGxheWVyQ2hpbGRyZW4gPSBwbGF5ZXJTcXVhcmVzLmNoaWxkcmVuO1xuXG4gIGxldCBzaGlwSW5kZXggPSAwO1xuICBsZXQgYXhpcyA9ICdob3InO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwbGF5ZXJTcXVhcmUgPSBwbGF5ZXJDaGlsZHJlbltpXTtcbiAgICBsZXQgY2FuUGxhY2U7IGxldFxuICAgICAgc2hpcFNxdWFyZTtcblxuICAgIHBsYXllclNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICBjYW5QbGFjZSA9IHBsYXllck9uZS5nZXRQbGF5ZXJCb2FyZCgpLmNhblBsYWNlU2hpcChwbGF5ZXJGbGVldFtwbGF5ZXJTaGlwc1tzaGlwSW5kZXhdXSwgcGxheWVyQ29vcnNbaV0sIGF4aXMpO1xuICAgICAgaWYgKGNhblBsYWNlWzBdID09PSB0cnVlKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2FuUGxhY2VbMV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzaGlwU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllci0ke2NhblBsYWNlWzFdW2pdfWApO1xuICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogZ3JheTsnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkW3BsYXllckNvb3JzW2ldXSA9PT0gbnVsbCkge1xuICAgICAgICBwbGF5ZXJTcXVhcmUuc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogbGlnaHRjb3JhbDsnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgY2FuUGxhY2UgPSBwbGF5ZXJPbmUuZ2V0UGxheWVyQm9hcmQoKS5jYW5QbGFjZVNoaXAocGxheWVyRmxlZXRbcGxheWVyU2hpcHNbc2hpcEluZGV4XV0sIHBsYXllckNvb3JzW2ldLCBheGlzKTtcbiAgICAgIGlmIChjYW5QbGFjZVswXSA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNhblBsYWNlWzFdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2hpcFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItJHtjYW5QbGFjZVsxXVtqXX1gKTtcbiAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IHdoaXRlOyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmRbcGxheWVyQ29vcnNbaV1dID09PSBudWxsKSB7XG4gICAgICAgIHBsYXllclNxdWFyZS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiB3aGl0ZTsnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2FuUGxhY2UgPSBwbGF5ZXJPbmUuZ2V0UGxheWVyQm9hcmQoKS5jYW5QbGFjZVNoaXAocGxheWVyRmxlZXRbcGxheWVyU2hpcHNbc2hpcEluZGV4XV0sIHBsYXllckNvb3JzW2ldLCBheGlzKTtcbiAgICAgIGlmIChjYW5QbGFjZVswXSA9PT0gdHJ1ZSkge1xuICAgICAgICBwbGF5ZXJPbmUucGxhY2VPbmVTaGlwKHBsYXllckZsZWV0W3BsYXllclNoaXBzW3NoaXBJbmRleF1dLCBwbGF5ZXJDb29yc1tpXSwgYXhpcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYW5QbGFjZVsxXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNoaXBTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyLSR7Y2FuUGxhY2VbMV1bal19YCk7XG4gICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiBncmF5Oyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpcEluZGV4ID49IHBsYXllclNoaXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBiYXR0bGUocGxheWVyT25lLCBjb21wdXRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBzaGlwSW5kZXggKz0gMTtcbiAgICAgICAgc2hpcEluZm8udGV4dENvbnRlbnQgPSBgUGxhY2luZzogJHtwbGF5ZXJTaGlwc1tzaGlwSW5kZXhdfWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChheGlzID09PSAnaG9yJykge1xuICAgICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9ICdDaGFuZ2UgdG8gSG9yaXpvbnRhbCc7XG4gICAgICBheGlzID0gJ3Zlcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSAnQ2hhbmdlIHRvIFZlcnRpY2FsJztcbiAgICAgIGF4aXMgPSAnaG9yJztcbiAgICB9XG4gIH0pO1xuXG4gIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwbGF5ZXJPbmUucmFuZG9tUGxhY2VtZW50cygpO1xuICAgIGJhdHRsZShwbGF5ZXJPbmUsIGNvbXB1dGVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGJhdHRsZShwbGF5ZXJPbmUsIGNvbXB1dGVyKSB7XG4gIHdoaWxlIChkb2N1bWVudC5ib2R5Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGVuZW15Qm9hcmQgPSBjb21wdXRlci5nZXRQbGF5ZXJCb2FyZCgpLmdldEJvYXJkKCk7XG4gIGNvbnN0IGVuZW15Q29vcnMgPSBPYmplY3Qua2V5cyhlbmVteUJvYXJkKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhdHRsZVBhZ2UocGxheWVyT25lLCBjb21wdXRlcikpO1xuXG4gIGNvbnN0IGdhbWVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtaW5mbycpO1xuICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQnKTtcbiAgY29uc3QgY29tcHV0ZXJTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZW15LWJvYXJkJyk7XG4gIGNvbnN0IGNvbXB1dGVyQ2hpbGRyZW4gPSBjb21wdXRlclNxdWFyZXMuY2hpbGRyZW47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZW5lbXlTcXVhcmUgPSBjb21wdXRlckNoaWxkcmVuW2ldO1xuXG4gICAgZW5lbXlTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSBwbGF5ZXJPbmUuYXR0YWNrKGVuZW15Q29vcnNbaV0sIGNvbXB1dGVyKTtcbiAgICAgIGxldCBwbGF5ZXJUZXh0ID0gJyc7XG5cbiAgICAgIGlmIChwbGF5ZXJBdHRhY2sgPT09ICdtaXNzJykge1xuICAgICAgICBlbmVteVNxdWFyZS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiBsaWdodGdyZWVuOyc7XG4gICAgICAgIHBsYXllclRleHQgPSBgWW91IGF0dGFja2VkIGNvb3JkaW5hdGUgJHtlbmVteUNvb3JzW2ldfSBhbmQgaXQncyBhICR7cGxheWVyQXR0YWNrfSFgO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJBdHRhY2sgPT09ICdoaXQnKSB7XG4gICAgICAgIGVuZW15U3F1YXJlLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IGxpZ2h0Y29yYWw7JztcbiAgICAgICAgZW5lbXlTcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICBwbGF5ZXJUZXh0ID0gYFlvdSBhdHRhY2tlZCBjb29yZGluYXRlICR7ZW5lbXlDb29yc1tpXX0gYW5kIGl0J3MgYSAke3BsYXllckF0dGFja30hYDtcbiAgICAgICAgaWYgKGNvbXB1dGVyLmdldFBsYXllckJvYXJkKCkuYXJlQWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKGNvbmZpcm0oJ0NPTkdSQVRTLCBZT1UgV0lOISAoUHJlc3MgYW55IGJ1dHRvbiB0byByZXN0YXJ0KScpKSB7XG4gICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllclRleHQgPSAnWW91IGF0dGFja2VkIGFuIGFscmVhZHkgbWFya2VkIHNwb3QhJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW5lbXlBdHRhY2sgPSBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyT25lKTtcbiAgICAgIGNvbnN0IHBsYXllclNxdWFyZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItJHtlbmVteUF0dGFja1swXX1gKTtcbiAgICAgIGxldCBlbmVteVRleHQgPSAnJztcblxuICAgICAgaWYgKGVuZW15QXR0YWNrWzFdID09PSAnbWlzcycpIHtcbiAgICAgICAgcGxheWVyU3F1YXJlU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgZW5lbXlUZXh0ID0gYENvbXB1dGVyIGF0dGFja2VkIGNvb3JkaW5hdGUgJHtlbmVteUF0dGFja1swXX0gYW5kIGl0J3MgYSAke2VuZW15QXR0YWNrWzFdfSFgO1xuICAgICAgfSBlbHNlIGlmIChlbmVteUF0dGFja1sxXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgcGxheWVyU3F1YXJlU2VsZWN0LnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IGxpZ2h0Y29yYWw7JztcbiAgICAgICAgZW5lbXlUZXh0ID0gYENvbXB1dGVyIGF0dGFja2VkIGNvb3JkaW5hdGUgJHtlbmVteUF0dGFja1swXX0gYW5kIGl0J3MgYSAke2VuZW15QXR0YWNrWzFdfSFgO1xuICAgICAgICBpZiAocGxheWVyT25lLmdldFBsYXllckJvYXJkKCkuYXJlQWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKGNvbmZpcm0oJ1RIRSBDT01QVVRFUiBXSU5TIDooIChQcmVzcyBhbnkgYnV0dG9uIHRvIHJlc3RhcnQpJykpIHtcbiAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBnYW1lSW5mby5pbm5lckhUTUwgPSBgJHtwbGF5ZXJUZXh0fTxocj4ke2VuZW15VGV4dH1gO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc3RhcnQ/IChCYWNrIHRvIHNoaXAgcGxhY2VtZW50KScpKSB7XG4gICAgICBzdGFydCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbnN0YXJ0KCk7XG4iLCJmdW5jdGlvbiBzaGlwUGxhY2VtZW50UGFnZShwbGF5ZXIpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGFjZW1lbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2hpcEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2hpcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gIHBsYWNlbWVudEluZm8uc2V0QXR0cmlidXRlKCdpZCcsICdwbGFjZW1lbnQtaW5mbycpO1xuICBwbGF5ZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXItY29udGFpbmVyJyk7XG4gIHBsYXllckJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyLWJvYXJkJyk7XG4gIHNoaXBJbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcC1pbmZvLWNvbnRhaW5lcicpO1xuICBzaGlwSW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXAtaW5mbycpO1xuICBheGlzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXhpcycpO1xuICByYW5kb21pemVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyYW5kb21pemUnKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuXG4gIHBhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gIHBsYWNlbWVudEluZm8udGV4dENvbnRlbnQgPSAnUGxhY2UgYWxsIGZpdmUgb2YgeW91ciBzaGlwcyB0byBiZWdpbiB0aGUgYmF0dGxlISc7XG4gIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSAnQ2hhbmdlIHRvIFZlcnRpY2FsJztcbiAgc2hpcEluZm8udGV4dENvbnRlbnQgPSAnUGxhY2luZzogQ2Fycmllcic7XG4gIHJhbmRvbWl6ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSYW5kb21pemUgUGxhY2VtZW50JztcbiAgZm9vdGVyLmlubmVySFRNTCA9IFwiQnkgeW91cnMgdHJ1bHksJm5ic3A7PGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL21yYWZmaWEnPm1yYWZmaWE8L2E+XCI7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2V0UGxheWVyQm9hcmQoKS5nZXRCb2FyZCgpO1xuICBjb25zdCBwbGF5ZXJDb29ycyA9IE9iamVjdC5rZXlzKHBsYXllckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgcGxheWVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwbGF5ZXJTcXVhcmUuc2V0QXR0cmlidXRlKCdpZCcsIGBwbGF5ZXItJHtwbGF5ZXJDb29yc1tpXX1gKTtcbiAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNxdWFyZScpO1xuICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnKTtcblxuICAgIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclNxdWFyZSk7XG4gIH1cblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG4gIHNoaXBJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBJbmZvKTtcbiAgc2hpcEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSW5mb0NvbnRhaW5lcik7XG4gIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZENvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxhY2VtZW50SW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChyYW5kb21pemVCdXR0b24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwUGxhY2VtZW50UGFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==