/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContactsPage": () => (/* binding */ loadContactsPage)
/* harmony export */ });
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

    header.appendChild(restaurantName)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(contactsButton)


    contentContainer.appendChild(header)
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

    header.appendChild(restaurantName)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(contactsButton)


    contentContainer.appendChild(header)
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
    

    header.appendChild(restaurantName)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(contactsButton)
    
    let mainContents = document.createElement('div')
    mainContents.id = 'main-content'

    let motto = document.createElement('div')
    motto.classList.add('motto')
    motto.innerText = "Perfect food, fitting for your mood"

    let foodImageContainer = document.createElement('div')
    let foodImage = document.createElement('img')
    foodImage.src = _food_image_jpeg__WEBPACK_IMPORTED_MODULE_0__
    foodImageContainer.appendChild(foodImage)

    mainContents.appendChild(motto)
    mainContents.appendChild(foodImage)

    contentContainer.appendChild(header)
    contentContainer.appendChild(mainContents)
}





/***/ }),

/***/ "./src/food-image.jpeg":
/*!*****************************!*\
  !*** ./src/food-image.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ef6db913df93a631506.jpeg";

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
/******/ 			// no module.id needed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3lCOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFhO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmbUM7QUFDTztBQUNQOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksb0RBQVE7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFZO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMkRBQWdCO0FBQ3BCO0FBQ0E7OztBQUdBLG1EQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0c1BhZ2UoKSB7XG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbiAgICBcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBsZXQgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlc3RhdXJhbnROYW1lLmlkID0gJ3Jlc3RhdXJhbnQtbmFtZSdcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSAnTW9vZEZvb2QnXG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaG9tZUJ1dHRvbi5pbm5lclRleHQgPSAnSG9tZSdcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnRuJylcbiAgICBob21lQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcblxuICAgIGxldCBjb250YWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29udGFjdHNCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbnRhY3RzJ1xuICAgIGNvbnRhY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLWJ0bicpXG4gICAgY29udGFjdHNCdXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gICAgXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnVCdXR0b24uaW5uZXJUZXh0ID0gJ01lbnUnXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpXG4gICAgbWVudUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RzQnV0dG9uKVxuXG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcbn1cblxuZXhwb3J0IHtsb2FkQ29udGFjdHNQYWdlfVxuXG5cbiIsImZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICAgIFxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGxldCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVzdGF1cmFudE5hbWUuaWQgPSAncmVzdGF1cmFudC1uYW1lJ1xuICAgIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9ICdNb29kRm9vZCdcblxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBob21lQnV0dG9uLmlubmVyVGV4dCA9ICdIb21lJ1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZS1idG4nKVxuICAgIGhvbWVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuXG4gICAgbGV0IGNvbnRhY3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb250YWN0c0J1dHRvbi5pbm5lclRleHQgPSAnQ29udGFjdHMnXG4gICAgY29udGFjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtYnRuJylcbiAgICBjb250YWN0c0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnVCdXR0b24uaW5uZXJUZXh0ID0gJ01lbnUnXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpXG4gICAgbWVudUJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdHNCdXR0b24pXG5cblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxufVxuXG5leHBvcnQge2xvYWRNZW51UGFnZX1cblxuXG4iLCJpbXBvcnQgbWFpbkZvb2RJbWFnZSBmcm9tICcuL2Zvb2QtaW1hZ2UuanBlZyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBsZXQgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlc3RhdXJhbnROYW1lLmlkID0gJ3Jlc3RhdXJhbnQtbmFtZSdcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSAnTW9vZEZvb2QnXG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaG9tZUJ1dHRvbi5pbm5lclRleHQgPSAnSG9tZSdcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnRuJylcbiAgICBob21lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZVxuXG4gICAgbGV0IGNvbnRhY3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb250YWN0c0J1dHRvbi5pbm5lclRleHQgPSAnQ29udGFjdHMnXG4gICAgY29udGFjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtYnRuJylcbiAgICBjb250YWN0c0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnVCdXR0b24uaW5uZXJUZXh0ID0gJ01lbnUnXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpXG4gICAgbWVudUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXG4gICAgXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RzQnV0dG9uKVxuICAgIFxuICAgIGxldCBtYWluQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250ZW50cy5pZCA9ICdtYWluLWNvbnRlbnQnXG5cbiAgICBsZXQgbW90dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vdHRvLmNsYXNzTGlzdC5hZGQoJ21vdHRvJylcbiAgICBtb3R0by5pbm5lclRleHQgPSBcIlBlcmZlY3QgZm9vZCwgZml0dGluZyBmb3IgeW91ciBtb29kXCJcblxuICAgIGxldCBmb29kSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGZvb2RJbWFnZS5zcmMgPSBtYWluRm9vZEltYWdlXG4gICAgZm9vZEltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RJbWFnZSlcblxuICAgIG1haW5Db250ZW50cy5hcHBlbmRDaGlsZChtb3R0bylcbiAgICBtYWluQ29udGVudHMuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKVxuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGVudHMpXG59XG5cbmV4cG9ydCB7bG9hZFBhZ2V9XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7bG9hZFBhZ2V9IGZyb20gJy4vcGFnZWxvYWQnXG5pbXBvcnQge2xvYWRDb250YWN0c1BhZ2V9IGZyb20gJy4vY29udGFjdCdcbmltcG9ydCB7bG9hZE1lbnVQYWdlfSBmcm9tICcuL21lbnUnXG5cbmZ1bmN0aW9uIGFwcGx5RXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnRuJylcbiAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpXG4gICAgbGV0IGNvbnRhY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzLWJ0bicpXG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJBbmRMb2FkSG9tZSlcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJBbmRMb2FkTWVudSlcbiAgICBjb250YWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQW5kTG9hZENvbnRhY3RzKVxuXG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudHMoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKVxufVxuXG5mdW5jdGlvbiBjbGVhckFuZExvYWRIb21lKCkge1xuICAgIGNsZWFyQ29udGVudHMoKVxuICAgIGxvYWRQYWdlKClcbiAgICBhcHBseUV2ZW50TGlzdGVuZXJzKClcbn1cblxuZnVuY3Rpb24gY2xlYXJBbmRMb2FkTWVudSgpIHtcbiAgICBjbGVhckNvbnRlbnRzKClcbiAgICBsb2FkTWVudVBhZ2UoKVxuICAgIGFwcGx5RXZlbnRMaXN0ZW5lcnMoKVxufVxuXG5mdW5jdGlvbiBjbGVhckFuZExvYWRDb250YWN0cygpIHtcbiAgICBjbGVhckNvbnRlbnRzKClcbiAgICBsb2FkQ29udGFjdHNQYWdlKClcbiAgICBhcHBseUV2ZW50TGlzdGVuZXJzKClcbn1cblxuXG5sb2FkUGFnZSgpXG5hcHBseUV2ZW50TGlzdGVuZXJzKClcblxuY29uc29sZS5sb2coJ1Rlc3QnKVxuLy8gICAgICAgICA8aGVhZGVyPlxuLy8gICAgICAgICAgICAgPGRpdiBpZD1cInJlc3RhdXJhbnQtbmFtZVwiPlxuLy8gICAgICAgICAgICAgICAgIE1vb2RGb29kXG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9oZWFkZXI+XG4vLyAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50LWJvZHlcIj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3R0b1wiPlxuLy8gICAgICAgICAgICAgICAgIFBlcmZlY3QgZm9vZCwgZml0dGluZyBmb3IgeW91ciBtb29kXG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Zvb2QtaW1hZ2UuanBlZ1wiIGFsdD1cIlwiPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==