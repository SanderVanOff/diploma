/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n//импорт модулей\r\n\r\n\r\n\r\n\r\n\r\n\r\n//подключение модулей\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n    const mobileMenu = document.querySelector('.mobile-menu');\r\n\r\n\r\n    const goToAncor = (e) => {\r\n        document.querySelector(e.hash).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    };\r\n\r\n\r\n    document.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if(e.target.closest('.mob-menu-btn')){\r\n            mobileMenu.style.right = 0;\r\n        }\r\n    \r\n        if(e.target.closest('.mobile-menu-close')){\r\n            mobileMenu.style.right = ''; \r\n        }\r\n\r\n        if(e.target.matches('ul > li > a') || e.target.matches('menu > a')){\r\n            goToAncor(e.target.closest('a'));\r\n        }\r\n        \r\n    });\r\n\r\n};\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n    \r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const modalCallback = document.querySelector('.modal-callback');\r\n\r\n\r\n    document.addEventListener('click', e => {\r\n        \r\n        if(e.target.closest('.callback-btn')) {\r\n            modalCallback.style.display = 'block';\r\n            modalOverlay.style.display = 'block';\r\n\r\n            modalOverlay.classList.remove('hide'); \r\n            modalOverlay.classList.add('show');\r\n\r\n            modalCallback.classList.remove('hide'); \r\n            modalCallback.classList.add('show');\r\n        }\r\n\r\n\r\n        if(e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {\r\n            modalCallback.classList.remove('show');\r\n            modalCallback.classList.add('hide'); \r\n\r\n            modalOverlay.classList.remove('show');\r\n            modalOverlay.classList.add('hide');\r\n            setTimeout(()=> {\r\n                modalCallback.style.display = 'none';\r\n            }, 200);\r\n            setTimeout(()=> {\r\n                modalOverlay.style.display = 'none';\r\n            }, 400);\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\r\n    const scrollBtn = document.querySelector('.up');\r\n    \r\n\r\n    scrollBtn.addEventListener('click', e => {\r\n        document.querySelector('.main-wrapper').scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n\r\n    document.addEventListener('scroll', e => {\r\n        if(e.target.scrollingElement.scrollTop >= document.querySelector('.services-section').offsetTop) {\r\n            scrollBtn.classList.remove('d-none');\r\n        } else {\r\n            scrollBtn.classList.add('d-none');\r\n        }\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack:///./modules/scroll.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;