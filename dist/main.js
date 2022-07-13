/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Arima&family=Edu+VIC+WA+NT+Beginner:wght@500&family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --highlight-color: rgb(160, 200, 160);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto';\n}\n\nbody {\n    background: rgb(255, 255, 255);\n}\n\nheader {\n    display: flex;\n    height: 150px;\n    align-items: center;\n    box-shadow: 0 0 3px 1px black;\n    padding: 0 25px;\n    background: var(--highlight-color);\n}\n\nheader > button {\n    margin: 0 3vw;\n    background: none;\n    border: none;\n    font-size: 20px;\n}\n\n#restaurant-name {\n    font-size: 48px;\n    font-family: 'Edu VIC WA NT Beginner', sans-serif;\n    font-weight: 600;\n    margin-right: auto;\n}\n\n#main-content {\n    position: relative;\n}\n\n#main-food-image {\n    width: 100vw;\n    height: auto;\n    position: relative;\n    z-index: -1;\n}\n\n.motto {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: white;\n    font-size: 48px;\n    width: fit-content;\n    font-family: 'Arima', sans-serif;\n    font-weight: bold;\n    text-align: center;\n    padding: 50px;\n}\n\n.info-container {\n    border: 1px solid black;\n    padding: 20px;\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.500)\n}\n\n.restaurant-info-container {\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n    grid-template-areas: \"description description\"\n                         \"hours location\";\n    justify-items: center;\n    background: var(--highlight-color);\n}\n\n.restaurant-description-outer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-area: description;\n    padding: 50px;\n}\n\n.restaurant-description-inner {\n    width: 50vw\n}\n\n#menu-container, #contacts-container {\n    display: flex;\n    justify-content: center;\n    width: inherit;\n    padding: 10vh 0;\n}\n\n#menu, #contacts {\n    background: var(--highlight-color);\n    width: 50vw;\n    min-width: fit-content;\n    border-radius: 10px;\n    display: grid;\n    padding: 3vh 3vw;\n}\n\n.title, .section-heading {\n    font-weight: bold;\n    text-align: center;\n}\n\n.title {\n    font-size: 30px;\n    margin: 0 0 3vh 0;\n}\n\n.section-heading {\n    font-size: 20px;\n    margin: 1vh 0;\n}\n\n.dish-container {\n    display: grid;\n    grid-template: 1.5rem 1fr / 1fr 1fr;\n    grid-template-areas: \"name price\"\n                         \"description description\";\n    margin: 2vh 0;\n}\n\n.dish-name {\n    grid-area: name;\n    font-weight: 600;\n}   \n\n.dish-price {\n    grid-area: price;\n    text-align: right;\n}\n\n.dish-description {\n    grid-area: description;\n    font-style: italic;\n    font-size: 15px;\n}\n\n#contacts {\n    row-gap: 10px;\n}\n\n.person-container {\n    display: grid;\n    grid-template: 1fr / 1fr auto;\n    background: rgba(255, 255, 255, 0.261);\n    border-radius: 10px;\n    padding: 1vw;\n}\n\n.information {\n    display: grid;\n    grid-template: auto auto auto auto 1fr / 1fr;\n    row-gap: 5px;\n    padding: 15px 0;\n}\n\n.person-image {\n    height: 250px;\n    width: 200px;\n    object-fit: cover;\n    border-radius: 10px;\n}\n\n.person-name {\n    font-size: 20px;\n    font-weight: bold;\n}\n\nimg {\n    display: block;\n}\n\n.banner {\n    position: relative;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iDAAiD;IACjD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gCAAgC;IAChC,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC;yCACqC;IACrC,qBAAqB;IACrB,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC;kDAC8C;IAC9C,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,sCAAsC;IACtC,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4CAA4C;IAC5C,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Arima&family=Edu+VIC+WA+NT+Beginner:wght@500&family=Roboto:wght@400;700&display=swap');\n\n:root {\n    --highlight-color: rgb(160, 200, 160);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto';\n}\n\nbody {\n    background: rgb(255, 255, 255);\n}\n\nheader {\n    display: flex;\n    height: 150px;\n    align-items: center;\n    box-shadow: 0 0 3px 1px black;\n    padding: 0 25px;\n    background: var(--highlight-color);\n}\n\nheader > button {\n    margin: 0 3vw;\n    background: none;\n    border: none;\n    font-size: 20px;\n}\n\n#restaurant-name {\n    font-size: 48px;\n    font-family: 'Edu VIC WA NT Beginner', sans-serif;\n    font-weight: 600;\n    margin-right: auto;\n}\n\n#main-content {\n    position: relative;\n}\n\n#main-food-image {\n    width: 100vw;\n    height: auto;\n    position: relative;\n    z-index: -1;\n}\n\n.motto {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: white;\n    font-size: 48px;\n    width: fit-content;\n    font-family: 'Arima', sans-serif;\n    font-weight: bold;\n    text-align: center;\n    padding: 50px;\n}\n\n.info-container {\n    border: 1px solid black;\n    padding: 20px;\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.500)\n}\n\n.restaurant-info-container {\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n    grid-template-areas: \"description description\"\n                         \"hours location\";\n    justify-items: center;\n    background: var(--highlight-color);\n}\n\n.restaurant-description-outer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-area: description;\n    padding: 50px;\n}\n\n.restaurant-description-inner {\n    width: 50vw\n}\n\n#menu-container, #contacts-container {\n    display: flex;\n    justify-content: center;\n    width: inherit;\n    padding: 10vh 0;\n}\n\n#menu, #contacts {\n    background: var(--highlight-color);\n    width: 50vw;\n    min-width: fit-content;\n    border-radius: 10px;\n    display: grid;\n    padding: 3vh 3vw;\n}\n\n.title, .section-heading {\n    font-weight: bold;\n    text-align: center;\n}\n\n.title {\n    font-size: 30px;\n    margin: 0 0 3vh 0;\n}\n\n.section-heading {\n    font-size: 20px;\n    margin: 1vh 0;\n}\n\n.dish-container {\n    display: grid;\n    grid-template: 1.5rem 1fr / 1fr 1fr;\n    grid-template-areas: \"name price\"\n                         \"description description\";\n    margin: 2vh 0;\n}\n\n.dish-name {\n    grid-area: name;\n    font-weight: 600;\n}   \n\n.dish-price {\n    grid-area: price;\n    text-align: right;\n}\n\n.dish-description {\n    grid-area: description;\n    font-style: italic;\n    font-size: 15px;\n}\n\n#contacts {\n    row-gap: 10px;\n}\n\n.person-container {\n    display: grid;\n    grid-template: 1fr / 1fr auto;\n    background: rgba(255, 255, 255, 0.261);\n    border-radius: 10px;\n    padding: 1vw;\n}\n\n.information {\n    display: grid;\n    grid-template: auto auto auto auto 1fr / 1fr;\n    row-gap: 5px;\n    padding: 15px 0;\n}\n\n.person-image {\n    height: 250px;\n    width: 200px;\n    object-fit: cover;\n    border-radius: 10px;\n}\n\n.person-name {\n    font-size: 20px;\n    font-weight: bold;\n}\n\nimg {\n    display: block;\n}\n\n.banner {\n    position: relative;\n}"],"sourceRoot":""}]);
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContactsPage": () => (/* binding */ loadContactsPage)
/* harmony export */ });
/* harmony import */ var _htmlfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlfunctions */ "./src/htmlfunctions.js");
/* harmony import */ var _manager_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager.jpeg */ "./src/manager.jpeg");
/* harmony import */ var _chef_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chef.jpeg */ "./src/chef.jpeg");
/* harmony import */ var _chef2_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chef2.jpeg */ "./src/chef2.jpeg");





function loadContactsPage() {
    let contentContainer = document.querySelector("#content")
    
    let header = document.createElement('header')
    let restaurantName = document.createElement('div')
    restaurantName.id = 'restaurant-name'
    restaurantName.innerText = 'MoodFood'

    let homeButton = document.createElement('button')
    homeButton.innerText = 'Home'
    homeButton.classList.add('home-btn')
    homeButton.disabled = false

    let contactsButton = document.createElement('button')
    contactsButton.innerText = 'Contacts'
    contactsButton.classList.add('contacts-btn')
    contactsButton.disabled = true
    
    let menuButton = document.createElement('button')
    menuButton.innerText = 'Menu'
    menuButton.classList.add('menu-btn')
    menuButton.disabled = false

    header.append(restaurantName, homeButton, menuButton, contactsButton)
    contentContainer.appendChild(header)

    let contactsContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    contactsContainer.id = 'contacts-container'

    let contacts = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    contacts.id = 'contacts'

    let contactsTitle = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    contactsTitle.classList.add('title')
    contactsTitle.innerText = 'Contact Information'

    let manager = Contact('Bob Smith', 'Restaurant Manager', '8888-1111', 'bobsmith@moodfoods.com', _manager_jpeg__WEBPACK_IMPORTED_MODULE_1__)
    let chef = Contact('John Doe', 'Chef', '7777-1111', 'johndoe@moodfood.com', _chef_jpeg__WEBPACK_IMPORTED_MODULE_2__)
    let chefTwo = Contact ('Jane Doe', 'Chef', '6666-1111', 'janedoe@moodfood.com', _chef2_jpeg__WEBPACK_IMPORTED_MODULE_3__)

    contacts.append(contactsTitle, manager, chef, chefTwo)
    contactsContainer.append(contacts)
    contentContainer.append(contactsContainer)

    function Contact(name, role, phoneNumber, email, image) {
        let personContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        personContainer.classList.add('person-container')

        let contactInfo = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        contactInfo.classList.add('information')

        let personName = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        personName.classList.add('person-name')
        personName.innerText = name

        let personRole = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        personRole.classList.add('person-role')
        personRole.innerText = role

        let personPhoneNo = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        personPhoneNo.classList.add('person-number')
        personPhoneNo.innerText = phoneNumber

        let personEmail = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        personEmail.classList.add('person-email')
        personEmail.innerText = email
        
        let personImage = document.createElement('img')
        personImage.src = image
        personImage.classList.add('person-image')

        contactInfo.append(personName, personRole, personPhoneNo, personEmail)
        personContainer.append(contactInfo, personImage)
        return personContainer
    }
}






/***/ }),

/***/ "./src/htmlfunctions.js":
/*!******************************!*\
  !*** ./src/htmlfunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newDiv": () => (/* binding */ newDiv)
/* harmony export */ });
function newDiv() {
    return document.createElement('div')
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenuPage": () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _htmlfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlfunctions */ "./src/htmlfunctions.js");


function loadMenuPage() {
    let contentContainer = document.querySelector("#content")
    
    let header = document.createElement('header')
    let restaurantName = document.createElement('div')
    restaurantName.id = 'restaurant-name'
    restaurantName.innerText = 'MoodFood'

    let homeButton = document.createElement('button')
    homeButton.innerText = 'Home'
    homeButton.classList.add('home-btn')
    homeButton.disabled = false

    let contactsButton = document.createElement('button')
    contactsButton.innerText = 'Contacts'
    contactsButton.classList.add('contacts-btn')
    contactsButton.disabled = false
    
    let menuButton = document.createElement('button')
    menuButton.innerText = 'Menu'
    menuButton.classList.add('menu-btn')
    menuButton.disabled = true

    header.append(restaurantName, homeButton, menuButton, contactsButton)
    contentContainer.appendChild(header)

    let menuContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    menuContainer.id = 'menu-container'

    let menu = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    menu.id = 'menu'

    let menuTitle = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    menuTitle.classList.add('title')
    menuTitle.innerText = "Menu"

    let mainDishContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    mainDishContainer.classList.add('main-dish-container')
    let mainDishSectionTitle = MenuSectionTitle('Main Dishes', mainDishContainer)

    mainDishContainer.appendChild(Dish('Beef Roast', 'Delicious beef roast with our signature berry sauce', 20))
    mainDishContainer.appendChild(Dish('Baked Salmon', 'Perfectly baked salmon fillets with a roasted red pepper sauce', 25))
    mainDishContainer.appendChild(Dish('Seafood Jambalaya', 'A delicious dish containing a healthy serving of shrimp, scallops and crawfish', 30))

    let dessertContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    dessertContainer.classList.add('dessert-container')
    let dessertSectionTitle = MenuSectionTitle('Desserts', dessertContainer)

    dessertContainer.appendChild(Dish('Lava Cake', 'Warm chocolate cake with a molten chocolate center', 10))
    dessertContainer.appendChild(Dish('Tiramisu', 'Our signature in-house tiramisu - limited quantity per day!', 15))
    dessertContainer.appendChild(Dish('Crème Brûlee', 'A rich custard dessert with a layer of caramlized sugar on top', 10))

    let drinkContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
    drinkContainer.classList.add('drink-container')
    let drinkSectionTitle = MenuSectionTitle('Drinks', drinkContainer)

    drinkContainer.appendChild(Dish('Bubble Tea', 'Our spin on bubble tea, using specially sourced tea leaves', 10))
    drinkContainer.appendChild(Dish('Iced Lemon Tea', 'A Hong Kong special - very refreshing and sweet!', 8))
    drinkContainer.appendChild(Dish('Canned Drink', 'Coca-cola, Fanta, Sprite, Dr Pepper', 5))

    menuContainer.appendChild(menu)
    menu.append(menuTitle, mainDishContainer, dessertContainer, drinkContainer)
    contentContainer.appendChild(menuContainer)

    function MenuSectionTitle(title, appendTarget) {
        let newSectionTitle = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        newSectionTitle.classList.add('section-heading')
        newSectionTitle.innerText = title
        appendTarget.append(newSectionTitle)

        return newSectionTitle
    }

    function Dish(name, description, price){
        let dishContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        dishContainer.classList.add('dish-container')
        
        let dishName = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        dishName.classList.add('dish-name')
        dishName.innerText = name

        let dishDescription = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        dishDescription.classList.add('dish-description')
        dishDescription.innerText = description

        let dishPrice = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
        dishPrice.classList.add('dish-price')
        dishPrice.innerText = `$${price}`

        dishContainer.append(dishName, dishDescription, dishPrice)

        return dishContainer
    }
}






/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _food_image_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-image.jpeg */ "./src/food-image.jpeg");
/* harmony import */ var _htmlfunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlfunctions */ "./src/htmlfunctions.js");



function loadPage() {
    let contentContainer = document.querySelector("#content")

    let header = document.createElement('header')
    let restaurantName = document.createElement('div')
    restaurantName.id = 'restaurant-name'
    restaurantName.innerText = 'MoodFood'

    let homeButton = document.createElement('button')
    homeButton.innerText = 'Home'
    homeButton.classList.add('home-btn')
    homeButton.disabled = true

    let contactsButton = document.createElement('button')
    contactsButton.innerText = 'Contacts'
    contactsButton.classList.add('contacts-btn')
    contactsButton.disabled = false
    
    let menuButton = document.createElement('button')
    menuButton.innerText = 'Menu'
    menuButton.classList.add('menu-btn')
    menuButton.disabled = false
    
    header.append(restaurantName, homeButton, menuButton, contactsButton)
    
    let mainContents = document.createElement('div')
    mainContents.id = 'main-content'

    let heroBanner = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_1__.newDiv)()
    heroBanner.classList.add('banner')

    let motto = document.createElement('div')
    motto.classList.add('motto')
    motto.innerText = "Perfect food, fitting for your mood"

    let foodImage = document.createElement('img')
    foodImage.src = _food_image_jpeg__WEBPACK_IMPORTED_MODULE_0__
    foodImage.id = "main-food-image"
    heroBanner.append(motto, foodImage)

    let restaurantInformationContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_1__.newDiv)()
    restaurantInformationContainer.classList.add('restaurant-info-container')

    let restaurantDescriptionContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_1__.newDiv)()
    restaurantDescriptionContainer.classList.add("restaurant-description-outer") 
    let restaurantDescription = document.createElement('p')
    restaurantDescription.classList.add('restaurant-description-inner', 'info-container')
    restaurantDescription.innerText = "Moodfood aims to provide delicious, appetizing meals regardless of the mood you are in. Our menu changes every season to keep things fresh and exciting. Come pay us a visit!"
    restaurantDescriptionContainer.append(restaurantDescription)
    
    let openingHoursContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_1__.newDiv)()
    openingHoursContainer.classList.add('opening-hours-outer')

    let locationContainer = (0,_htmlfunctions__WEBPACK_IMPORTED_MODULE_1__.newDiv)()
    locationContainer.classList.add('location-outer')

    restaurantInformationContainer.append(restaurantDescriptionContainer, openingHoursContainer, locationContainer)


    mainContents.append(heroBanner, restaurantInformationContainer)
    contentContainer.append(header, mainContents)
}





/***/ }),

/***/ "./src/chef.jpeg":
/*!***********************!*\
  !*** ./src/chef.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d08a5748ffce34802a7b.jpeg";

/***/ }),

/***/ "./src/chef2.jpeg":
/*!************************!*\
  !*** ./src/chef2.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebd8ab6a072cc5773181.jpeg";

/***/ }),

/***/ "./src/food-image.jpeg":
/*!*****************************!*\
  !*** ./src/food-image.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ef6db913df93a631506.jpeg";

/***/ }),

/***/ "./src/manager.jpeg":
/*!**************************!*\
  !*** ./src/manager.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bba848312982872f9b00.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function applyEventListeners () {
    let homeBtn = document.querySelector('.home-btn')
    let menuBtn = document.querySelector('.menu-btn')
    let contactsBtn = document.querySelector('.contacts-btn')

    homeBtn.addEventListener('click', clearAndLoadHome)
    menuBtn.addEventListener('click', clearAndLoadMenu)
    contactsBtn.addEventListener('click', clearAndLoadContacts)

}

function clearContents() {
    let content = document.querySelector('#content')
    content.replaceChildren()
}

function clearAndLoadHome() {
    clearContents()
    ;(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.loadPage)()
    applyEventListeners()
}

function clearAndLoadMenu() {
    clearContents()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)()
    applyEventListeners()
}

function clearAndLoadContacts() {
    clearContents()
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadContactsPage)()
    applyEventListeners()
}


(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.loadPage)()
applyEventListeners()

console.log('Test')
//         <header>
//             <div id="restaurant-name">
//                 MoodFood
//             </div>
//         </header>
//         <div id="content-body">
//             <div class="motto">
//                 Perfect food, fitting for your mood
//             </div>
//             <div class="image">
//                 <img src="../src/food-image.jpeg" alt="">
//             </div>
//         </div>
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNPO0FBQ1A7QUFDZjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxvREFBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDJEQUFnQjtBQUNwQjtBQUNBOzs7QUFHQSxtREFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2h0bWxmdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmltYSZmYW1pbHk9RWR1K1ZJQytXQStOVCtCZWdpbm5lcjp3Z2h0QDUwMCZmYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiByZ2IoMTYwLCAyMDAsIDE2MCk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAgMjVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIDN2dztcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNyZXN0YXVyYW50LW5hbWUge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRWR1IFZJQyBXQSBOVCBCZWdpbm5lcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI21haW4tZm9vZC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubW90dG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LWZhbWlseTogJ0FyaW1hJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDApXFxufVxcblxcbi5yZXN0YXVyYW50LWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImhvdXJzIGxvY2F0aW9uXFxcIjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1kZXNjcmlwdGlvbi1vdXRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1kZXNjcmlwdGlvbi1pbm5lciB7XFxuICAgIHdpZHRoOiA1MHZ3XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciwgI2NvbnRhY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMTB2aCAwO1xcbn1cXG5cXG4jbWVudSwgI2NvbnRhY3RzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDN2aCAzdnc7XFxufVxcblxcbi50aXRsZSwgLnNlY3Rpb24taGVhZGluZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIDAgM3ZoIDA7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMXZoIDA7XFxufVxcblxcbi5kaXNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEuNXJlbSAxZnIgLyAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmFtZSBwcmljZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIjtcXG4gICAgbWFyZ2luOiAydmggMDtcXG59XFxuXFxuLmRpc2gtbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59ICAgXFxuXFxuLmRpc2gtcHJpY2Uge1xcbiAgICBncmlkLWFyZWE6IHByaWNlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmRpc2gtZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuI2NvbnRhY3RzIHtcXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLnBlcnNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgYXV0bztcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDF2dztcXG59XFxuXFxuLmluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIGF1dG8gYXV0byAxZnIgLyAxZnI7XFxuICAgIHJvdy1nYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4ucGVyc29uLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBlcnNvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaURBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDO3lDQUNxQztJQUNyQyxxQkFBcUI7SUFDckIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkM7a0RBQzhDO0lBQzlDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmltYSZmYW1pbHk9RWR1K1ZJQytXQStOVCtCZWdpbm5lcjp3Z2h0QDUwMCZmYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiByZ2IoMTYwLCAyMDAsIDE2MCk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAgMjVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIDN2dztcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNyZXN0YXVyYW50LW5hbWUge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRWR1IFZJQyBXQSBOVCBCZWdpbm5lcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI21haW4tZm9vZC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubW90dG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LWZhbWlseTogJ0FyaW1hJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDApXFxufVxcblxcbi5yZXN0YXVyYW50LWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImhvdXJzIGxvY2F0aW9uXFxcIjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1kZXNjcmlwdGlvbi1vdXRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1kZXNjcmlwdGlvbi1pbm5lciB7XFxuICAgIHdpZHRoOiA1MHZ3XFxufVxcblxcbiNtZW51LWNvbnRhaW5lciwgI2NvbnRhY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMTB2aCAwO1xcbn1cXG5cXG4jbWVudSwgI2NvbnRhY3RzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDN2aCAzdnc7XFxufVxcblxcbi50aXRsZSwgLnNlY3Rpb24taGVhZGluZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIDAgM3ZoIDA7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMXZoIDA7XFxufVxcblxcbi5kaXNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEuNXJlbSAxZnIgLyAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmFtZSBwcmljZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIjtcXG4gICAgbWFyZ2luOiAydmggMDtcXG59XFxuXFxuLmRpc2gtbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59ICAgXFxuXFxuLmRpc2gtcHJpY2Uge1xcbiAgICBncmlkLWFyZWE6IHByaWNlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmRpc2gtZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuI2NvbnRhY3RzIHtcXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLnBlcnNvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgYXV0bztcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDF2dztcXG59XFxuXFxuLmluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIGF1dG8gYXV0byAxZnIgLyAxZnI7XFxuICAgIHJvdy1nYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4ucGVyc29uLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBlcnNvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtuZXdEaXZ9IGZyb20gJy4vaHRtbGZ1bmN0aW9ucydcbmltcG9ydCBtYW5hZ2VyUGljIGZyb20gJy4vbWFuYWdlci5qcGVnJ1xuaW1wb3J0IGNoZWZQaWMgZnJvbSAnLi9jaGVmLmpwZWcnXG5pbXBvcnQgY2hlZlR3b1BpYyBmcm9tICcuL2NoZWYyLmpwZWcnXG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0c1BhZ2UoKSB7XG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbiAgICBcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBsZXQgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlc3RhdXJhbnROYW1lLmlkID0gJ3Jlc3RhdXJhbnQtbmFtZSdcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSAnTW9vZEZvb2QnXG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaG9tZUJ1dHRvbi5pbm5lclRleHQgPSAnSG9tZSdcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnRuJylcbiAgICBob21lQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcblxuICAgIGxldCBjb250YWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29udGFjdHNCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbnRhY3RzJ1xuICAgIGNvbnRhY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLWJ0bicpXG4gICAgY29udGFjdHNCdXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnVCdXR0b24uaW5uZXJUZXh0ID0gJ01lbnUnXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpXG4gICAgbWVudUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICBoZWFkZXIuYXBwZW5kKHJlc3RhdXJhbnROYW1lLCBob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0c0J1dHRvbilcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIGxldCBjb250YWN0c0NvbnRhaW5lciA9IG5ld0RpdigpXG4gICAgY29udGFjdHNDb250YWluZXIuaWQgPSAnY29udGFjdHMtY29udGFpbmVyJ1xuXG4gICAgbGV0IGNvbnRhY3RzID0gbmV3RGl2KClcbiAgICBjb250YWN0cy5pZCA9ICdjb250YWN0cydcblxuICAgIGxldCBjb250YWN0c1RpdGxlID0gbmV3RGl2KClcbiAgICBjb250YWN0c1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICBjb250YWN0c1RpdGxlLmlubmVyVGV4dCA9ICdDb250YWN0IEluZm9ybWF0aW9uJ1xuXG4gICAgbGV0IG1hbmFnZXIgPSBDb250YWN0KCdCb2IgU21pdGgnLCAnUmVzdGF1cmFudCBNYW5hZ2VyJywgJzg4ODgtMTExMScsICdib2JzbWl0aEBtb29kZm9vZHMuY29tJywgbWFuYWdlclBpYylcbiAgICBsZXQgY2hlZiA9IENvbnRhY3QoJ0pvaG4gRG9lJywgJ0NoZWYnLCAnNzc3Ny0xMTExJywgJ2pvaG5kb2VAbW9vZGZvb2QuY29tJywgY2hlZlBpYylcbiAgICBsZXQgY2hlZlR3byA9IENvbnRhY3QgKCdKYW5lIERvZScsICdDaGVmJywgJzY2NjYtMTExMScsICdqYW5lZG9lQG1vb2Rmb29kLmNvbScsIGNoZWZUd29QaWMpXG5cbiAgICBjb250YWN0cy5hcHBlbmQoY29udGFjdHNUaXRsZSwgbWFuYWdlciwgY2hlZiwgY2hlZlR3bylcbiAgICBjb250YWN0c0NvbnRhaW5lci5hcHBlbmQoY29udGFjdHMpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGFjdHNDb250YWluZXIpXG5cbiAgICBmdW5jdGlvbiBDb250YWN0KG5hbWUsIHJvbGUsIHBob25lTnVtYmVyLCBlbWFpbCwgaW1hZ2UpIHtcbiAgICAgICAgbGV0IHBlcnNvbkNvbnRhaW5lciA9IG5ld0RpdigpXG4gICAgICAgIHBlcnNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwZXJzb24tY29udGFpbmVyJylcblxuICAgICAgICBsZXQgY29udGFjdEluZm8gPSBuZXdEaXYoKVxuICAgICAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbicpXG5cbiAgICAgICAgbGV0IHBlcnNvbk5hbWUgPSBuZXdEaXYoKVxuICAgICAgICBwZXJzb25OYW1lLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbi1uYW1lJylcbiAgICAgICAgcGVyc29uTmFtZS5pbm5lclRleHQgPSBuYW1lXG5cbiAgICAgICAgbGV0IHBlcnNvblJvbGUgPSBuZXdEaXYoKVxuICAgICAgICBwZXJzb25Sb2xlLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbi1yb2xlJylcbiAgICAgICAgcGVyc29uUm9sZS5pbm5lclRleHQgPSByb2xlXG5cbiAgICAgICAgbGV0IHBlcnNvblBob25lTm8gPSBuZXdEaXYoKVxuICAgICAgICBwZXJzb25QaG9uZU5vLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbi1udW1iZXInKVxuICAgICAgICBwZXJzb25QaG9uZU5vLmlubmVyVGV4dCA9IHBob25lTnVtYmVyXG5cbiAgICAgICAgbGV0IHBlcnNvbkVtYWlsID0gbmV3RGl2KClcbiAgICAgICAgcGVyc29uRW1haWwuY2xhc3NMaXN0LmFkZCgncGVyc29uLWVtYWlsJylcbiAgICAgICAgcGVyc29uRW1haWwuaW5uZXJUZXh0ID0gZW1haWxcbiAgICAgICAgXG4gICAgICAgIGxldCBwZXJzb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIHBlcnNvbkltYWdlLnNyYyA9IGltYWdlXG4gICAgICAgIHBlcnNvbkltYWdlLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbi1pbWFnZScpXG5cbiAgICAgICAgY29udGFjdEluZm8uYXBwZW5kKHBlcnNvbk5hbWUsIHBlcnNvblJvbGUsIHBlcnNvblBob25lTm8sIHBlcnNvbkVtYWlsKVxuICAgICAgICBwZXJzb25Db250YWluZXIuYXBwZW5kKGNvbnRhY3RJbmZvLCBwZXJzb25JbWFnZSlcbiAgICAgICAgcmV0dXJuIHBlcnNvbkNvbnRhaW5lclxuICAgIH1cbn1cblxuZXhwb3J0IHtsb2FkQ29udGFjdHNQYWdlfVxuXG5cbiIsImZ1bmN0aW9uIG5ld0RpdigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbn1cblxuZXhwb3J0IHtuZXdEaXZ9IiwiaW1wb3J0IHtuZXdEaXZ9IGZyb20gJy4vaHRtbGZ1bmN0aW9ucydcblxuZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gICAgXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgbGV0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXN0YXVyYW50TmFtZS5pZCA9ICdyZXN0YXVyYW50LW5hbWUnXG4gICAgcmVzdGF1cmFudE5hbWUuaW5uZXJUZXh0ID0gJ01vb2RGb29kJ1xuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGhvbWVCdXR0b24uaW5uZXJUZXh0ID0gJ0hvbWUnXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ0bicpXG4gICAgaG9tZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICBsZXQgY29udGFjdHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRhY3RzQnV0dG9uLmlubmVyVGV4dCA9ICdDb250YWN0cydcbiAgICBjb250YWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy1idG4nKVxuICAgIGNvbnRhY3RzQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICBcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbWVudUJ1dHRvbi5pbm5lclRleHQgPSAnTWVudSdcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnRuJylcbiAgICBtZW51QnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuXG4gICAgaGVhZGVyLmFwcGVuZChyZXN0YXVyYW50TmFtZSwgaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgY29udGFjdHNCdXR0b24pXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgICBsZXQgbWVudUNvbnRhaW5lciA9IG5ld0RpdigpXG4gICAgbWVudUNvbnRhaW5lci5pZCA9ICdtZW51LWNvbnRhaW5lcidcblxuICAgIGxldCBtZW51ID0gbmV3RGl2KClcbiAgICBtZW51LmlkID0gJ21lbnUnXG5cbiAgICBsZXQgbWVudVRpdGxlID0gbmV3RGl2KClcbiAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSBcIk1lbnVcIlxuXG4gICAgbGV0IG1haW5EaXNoQ29udGFpbmVyID0gbmV3RGl2KClcbiAgICBtYWluRGlzaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWRpc2gtY29udGFpbmVyJylcbiAgICBsZXQgbWFpbkRpc2hTZWN0aW9uVGl0bGUgPSBNZW51U2VjdGlvblRpdGxlKCdNYWluIERpc2hlcycsIG1haW5EaXNoQ29udGFpbmVyKVxuXG4gICAgbWFpbkRpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQoRGlzaCgnQmVlZiBSb2FzdCcsICdEZWxpY2lvdXMgYmVlZiByb2FzdCB3aXRoIG91ciBzaWduYXR1cmUgYmVycnkgc2F1Y2UnLCAyMCkpXG4gICAgbWFpbkRpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQoRGlzaCgnQmFrZWQgU2FsbW9uJywgJ1BlcmZlY3RseSBiYWtlZCBzYWxtb24gZmlsbGV0cyB3aXRoIGEgcm9hc3RlZCByZWQgcGVwcGVyIHNhdWNlJywgMjUpKVxuICAgIG1haW5EaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKERpc2goJ1NlYWZvb2QgSmFtYmFsYXlhJywgJ0EgZGVsaWNpb3VzIGRpc2ggY29udGFpbmluZyBhIGhlYWx0aHkgc2VydmluZyBvZiBzaHJpbXAsIHNjYWxsb3BzIGFuZCBjcmF3ZmlzaCcsIDMwKSlcblxuICAgIGxldCBkZXNzZXJ0Q29udGFpbmVyID0gbmV3RGl2KClcbiAgICBkZXNzZXJ0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc3NlcnQtY29udGFpbmVyJylcbiAgICBsZXQgZGVzc2VydFNlY3Rpb25UaXRsZSA9IE1lbnVTZWN0aW9uVGl0bGUoJ0Rlc3NlcnRzJywgZGVzc2VydENvbnRhaW5lcilcblxuICAgIGRlc3NlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoRGlzaCgnTGF2YSBDYWtlJywgJ1dhcm0gY2hvY29sYXRlIGNha2Ugd2l0aCBhIG1vbHRlbiBjaG9jb2xhdGUgY2VudGVyJywgMTApKVxuICAgIGRlc3NlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoRGlzaCgnVGlyYW1pc3UnLCAnT3VyIHNpZ25hdHVyZSBpbi1ob3VzZSB0aXJhbWlzdSAtIGxpbWl0ZWQgcXVhbnRpdHkgcGVyIGRheSEnLCAxNSkpXG4gICAgZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChEaXNoKCdDcsOobWUgQnLDu2xlZScsICdBIHJpY2ggY3VzdGFyZCBkZXNzZXJ0IHdpdGggYSBsYXllciBvZiBjYXJhbWxpemVkIHN1Z2FyIG9uIHRvcCcsIDEwKSlcblxuICAgIGxldCBkcmlua0NvbnRhaW5lciA9IG5ld0RpdigpXG4gICAgZHJpbmtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJpbmstY29udGFpbmVyJylcbiAgICBsZXQgZHJpbmtTZWN0aW9uVGl0bGUgPSBNZW51U2VjdGlvblRpdGxlKCdEcmlua3MnLCBkcmlua0NvbnRhaW5lcilcblxuICAgIGRyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKERpc2goJ0J1YmJsZSBUZWEnLCAnT3VyIHNwaW4gb24gYnViYmxlIHRlYSwgdXNpbmcgc3BlY2lhbGx5IHNvdXJjZWQgdGVhIGxlYXZlcycsIDEwKSlcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChEaXNoKCdJY2VkIExlbW9uIFRlYScsICdBIEhvbmcgS29uZyBzcGVjaWFsIC0gdmVyeSByZWZyZXNoaW5nIGFuZCBzd2VldCEnLCA4KSlcbiAgICBkcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChEaXNoKCdDYW5uZWQgRHJpbmsnLCAnQ29jYS1jb2xhLCBGYW50YSwgU3ByaXRlLCBEciBQZXBwZXInLCA1KSlcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSlcbiAgICBtZW51LmFwcGVuZChtZW51VGl0bGUsIG1haW5EaXNoQ29udGFpbmVyLCBkZXNzZXJ0Q29udGFpbmVyLCBkcmlua0NvbnRhaW5lcilcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpXG5cbiAgICBmdW5jdGlvbiBNZW51U2VjdGlvblRpdGxlKHRpdGxlLCBhcHBlbmRUYXJnZXQpIHtcbiAgICAgICAgbGV0IG5ld1NlY3Rpb25UaXRsZSA9IG5ld0RpdigpXG4gICAgICAgIG5ld1NlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRpbmcnKVxuICAgICAgICBuZXdTZWN0aW9uVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVcbiAgICAgICAgYXBwZW5kVGFyZ2V0LmFwcGVuZChuZXdTZWN0aW9uVGl0bGUpXG5cbiAgICAgICAgcmV0dXJuIG5ld1NlY3Rpb25UaXRsZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIERpc2gobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKXtcbiAgICAgICAgbGV0IGRpc2hDb250YWluZXIgPSBuZXdEaXYoKVxuICAgICAgICBkaXNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtY29udGFpbmVyJylcbiAgICAgICAgXG4gICAgICAgIGxldCBkaXNoTmFtZSA9IG5ld0RpdigpXG4gICAgICAgIGRpc2hOYW1lLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtbmFtZScpXG4gICAgICAgIGRpc2hOYW1lLmlubmVyVGV4dCA9IG5hbWVcblxuICAgICAgICBsZXQgZGlzaERlc2NyaXB0aW9uID0gbmV3RGl2KClcbiAgICAgICAgZGlzaERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtZGVzY3JpcHRpb24nKVxuICAgICAgICBkaXNoRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25cblxuICAgICAgICBsZXQgZGlzaFByaWNlID0gbmV3RGl2KClcbiAgICAgICAgZGlzaFByaWNlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtcHJpY2UnKVxuICAgICAgICBkaXNoUHJpY2UuaW5uZXJUZXh0ID0gYCQke3ByaWNlfWBcblxuICAgICAgICBkaXNoQ29udGFpbmVyLmFwcGVuZChkaXNoTmFtZSwgZGlzaERlc2NyaXB0aW9uLCBkaXNoUHJpY2UpXG5cbiAgICAgICAgcmV0dXJuIGRpc2hDb250YWluZXJcbiAgICB9XG59XG5cbmV4cG9ydCB7bG9hZE1lbnVQYWdlfVxuXG5cbiIsImltcG9ydCBtYWluRm9vZEltYWdlIGZyb20gJy4vZm9vZC1pbWFnZS5qcGVnJztcbmltcG9ydCB7bmV3RGl2fSBmcm9tICcuL2h0bWxmdW5jdGlvbnMnXG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBsZXQgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlc3RhdXJhbnROYW1lLmlkID0gJ3Jlc3RhdXJhbnQtbmFtZSdcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSAnTW9vZEZvb2QnXG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaG9tZUJ1dHRvbi5pbm5lclRleHQgPSAnSG9tZSdcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnRuJylcbiAgICBob21lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuXG4gICAgbGV0IGNvbnRhY3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb250YWN0c0J1dHRvbi5pbm5lclRleHQgPSAnQ29udGFjdHMnXG4gICAgY29udGFjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtYnRuJylcbiAgICBjb250YWN0c0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnVCdXR0b24uaW5uZXJUZXh0ID0gJ01lbnUnXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpXG4gICAgbWVudUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZChyZXN0YXVyYW50TmFtZSwgaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgY29udGFjdHNCdXR0b24pXG4gICAgXG4gICAgbGV0IG1haW5Db250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkNvbnRlbnRzLmlkID0gJ21haW4tY29udGVudCdcblxuICAgIGxldCBoZXJvQmFubmVyID0gbmV3RGl2KClcbiAgICBoZXJvQmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpXG5cbiAgICBsZXQgbW90dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vdHRvLmNsYXNzTGlzdC5hZGQoJ21vdHRvJylcbiAgICBtb3R0by5pbm5lclRleHQgPSBcIlBlcmZlY3QgZm9vZCwgZml0dGluZyBmb3IgeW91ciBtb29kXCJcblxuICAgIGxldCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGZvb2RJbWFnZS5zcmMgPSBtYWluRm9vZEltYWdlXG4gICAgZm9vZEltYWdlLmlkID0gXCJtYWluLWZvb2QtaW1hZ2VcIlxuICAgIGhlcm9CYW5uZXIuYXBwZW5kKG1vdHRvLCBmb29kSW1hZ2UpXG5cbiAgICBsZXQgcmVzdGF1cmFudEluZm9ybWF0aW9uQ29udGFpbmVyID0gbmV3RGl2KClcbiAgICByZXN0YXVyYW50SW5mb3JtYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1pbmZvLWNvbnRhaW5lcicpXG5cbiAgICBsZXQgcmVzdGF1cmFudERlc2NyaXB0aW9uQ29udGFpbmVyID0gbmV3RGl2KClcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtZGVzY3JpcHRpb24tb3V0ZXJcIikgXG4gICAgbGV0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWRlc2NyaXB0aW9uLWlubmVyJywgJ2luZm8tY29udGFpbmVyJylcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJNb29kZm9vZCBhaW1zIHRvIHByb3ZpZGUgZGVsaWNpb3VzLCBhcHBldGl6aW5nIG1lYWxzIHJlZ2FyZGxlc3Mgb2YgdGhlIG1vb2QgeW91IGFyZSBpbi4gT3VyIG1lbnUgY2hhbmdlcyBldmVyeSBzZWFzb24gdG8ga2VlcCB0aGluZ3MgZnJlc2ggYW5kIGV4Y2l0aW5nLiBDb21lIHBheSB1cyBhIHZpc2l0IVwiXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChyZXN0YXVyYW50RGVzY3JpcHRpb24pXG4gICAgXG4gICAgbGV0IG9wZW5pbmdIb3Vyc0NvbnRhaW5lciA9IG5ld0RpdigpXG4gICAgb3BlbmluZ0hvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW5pbmctaG91cnMtb3V0ZXInKVxuXG4gICAgbGV0IGxvY2F0aW9uQ29udGFpbmVyID0gbmV3RGl2KClcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1vdXRlcicpXG5cbiAgICByZXN0YXVyYW50SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kKHJlc3RhdXJhbnREZXNjcmlwdGlvbkNvbnRhaW5lciwgb3BlbmluZ0hvdXJzQ29udGFpbmVyLCBsb2NhdGlvbkNvbnRhaW5lcilcblxuXG4gICAgbWFpbkNvbnRlbnRzLmFwcGVuZChoZXJvQmFubmVyLCByZXN0YXVyYW50SW5mb3JtYXRpb25Db250YWluZXIpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBtYWluQ29udGVudHMpXG59XG5cbmV4cG9ydCB7bG9hZFBhZ2V9XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2xvYWRQYWdlfSBmcm9tICcuL3BhZ2Vsb2FkJ1xuaW1wb3J0IHtsb2FkQ29udGFjdHNQYWdlfSBmcm9tICcuL2NvbnRhY3QnXG5pbXBvcnQge2xvYWRNZW51UGFnZX0gZnJvbSAnLi9tZW51J1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuZnVuY3Rpb24gYXBwbHlFdmVudExpc3RlbmVycyAoKSB7XG4gICAgbGV0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idG4nKVxuICAgIGxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJylcbiAgICBsZXQgY29udGFjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtYnRuJylcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckFuZExvYWRIb21lKVxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckFuZExvYWRNZW51KVxuICAgIGNvbnRhY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJBbmRMb2FkQ29udGFjdHMpXG5cbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50cygpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpXG59XG5cbmZ1bmN0aW9uIGNsZWFyQW5kTG9hZEhvbWUoKSB7XG4gICAgY2xlYXJDb250ZW50cygpXG4gICAgbG9hZFBhZ2UoKVxuICAgIGFwcGx5RXZlbnRMaXN0ZW5lcnMoKVxufVxuXG5mdW5jdGlvbiBjbGVhckFuZExvYWRNZW51KCkge1xuICAgIGNsZWFyQ29udGVudHMoKVxuICAgIGxvYWRNZW51UGFnZSgpXG4gICAgYXBwbHlFdmVudExpc3RlbmVycygpXG59XG5cbmZ1bmN0aW9uIGNsZWFyQW5kTG9hZENvbnRhY3RzKCkge1xuICAgIGNsZWFyQ29udGVudHMoKVxuICAgIGxvYWRDb250YWN0c1BhZ2UoKVxuICAgIGFwcGx5RXZlbnRMaXN0ZW5lcnMoKVxufVxuXG5cbmxvYWRQYWdlKClcbmFwcGx5RXZlbnRMaXN0ZW5lcnMoKVxuXG5jb25zb2xlLmxvZygnVGVzdCcpXG4vLyAgICAgICAgIDxoZWFkZXI+XG4vLyAgICAgICAgICAgICA8ZGl2IGlkPVwicmVzdGF1cmFudC1uYW1lXCI+XG4vLyAgICAgICAgICAgICAgICAgTW9vZEZvb2Rcbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2hlYWRlcj5cbi8vICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtYm9keVwiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdHRvXCI+XG4vLyAgICAgICAgICAgICAgICAgUGVyZmVjdCBmb29kLCBmaXR0aW5nIGZvciB5b3VyIG1vb2Rcbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XG4vLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvZm9vZC1pbWFnZS5qcGVnXCIgYWx0PVwiXCI+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9