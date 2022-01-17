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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n//импорт модулей\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//подключение модулей\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.scroll)();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__.slider)({\r\n    sliderContent: 'top-slider',\r\n    sliderItemClass: 'top-slider .item',\r\n    slideActiveClass: 'active',\r\n    dotsContentClass: 'dots',\r\n    dotClass: 'dot',\r\n    dotActiveClass: 'dot-active',\r\n    timer: 3000\r\n});\r\n\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_4__.carousel)();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_5__.accordeon)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordeon\": () => (/* binding */ accordeon)\n/* harmony export */ });\nconst accordeon = () => {\r\n    const accordeonBlock = document.querySelector('.accordeon');\r\n    const elemBlocks = accordeonBlock.querySelectorAll('.element');\r\n\r\n    accordeonBlock.addEventListener('click', e => {\r\n        if(e.target.closest('.element')){\r\n            elemBlocks.forEach(item => {\r\n                item.classList.remove('active');\r\n                item.querySelector('.element-content').style.display = 'none';\r\n            });\r\n            e.target.closest('.element').classList.add('active');\r\n            e.target.closest('.element').querySelector('.element-content').style.display = 'block';\r\n\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nconst carousel = () => {\r\n\r\n    const cards = document.querySelectorAll('.carousel-item');\r\n    const servicesArrow = document.querySelector('.services-arrow');\r\n    const buttons = servicesArrow.querySelectorAll('img');\r\n\r\n    let firstIdx = 0;\r\n    let lastIdx = 3;\r\n\r\n    const changeActiveButton = (button, length, buttons) => {\r\n        buttons.forEach(item => {\r\n            item.style.opacity = 1;\r\n        });\r\n        if(firstIdx < 1){\r\n            button.style.opacity = '0.5';\r\n            \r\n        } else if(lastIdx >= length) {\r\n            button.style.opacity = '0.5';\r\n        } else {\r\n            button.style.opacity = '1';\r\n        }\r\n    };\r\n\r\n\r\n    const next = () => {\r\n        if((lastIdx < cards.length)){\r\n            cards[firstIdx].classList.add('d-none');\r\n            cards[lastIdx].classList.remove('d-none');\r\n            firstIdx++;\r\n            lastIdx++;\r\n        }\r\n    };\r\n\r\n    const prev = () => {\r\n        if((firstIdx >= 1)){\r\n            firstIdx--;\r\n            lastIdx--;\r\n            cards[firstIdx].classList.remove('d-none');\r\n            cards[lastIdx].classList.add('d-none');\r\n        }\r\n    };\r\n\r\n    servicesArrow.addEventListener('click', (e) => {\r\n        if(e.target.closest('.arrow-left')) {\r\n            prev(e.target);\r\n            changeActiveButton(e.target, cards.length, buttons);\r\n        } else if(e.target.closest('.arrow-right')){\r\n            next(e.target);\r\n            changeActiveButton(e.target, cards.length, buttons);\r\n        }\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack:///./modules/carousel.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n    \r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const modalCallback = document.querySelector('.modal-callback');\r\n\r\n\r\n    document.addEventListener('click', e => {\r\n        \r\n        if(e.target.closest('.callback-btn') || e.target.closest('.button-services') || e.target.closest('.fancyboxModal')) {\r\n            modalCallback.style.display = 'block';\r\n            modalOverlay.style.display = 'block';\r\n\r\n            modalOverlay.classList.remove('hide'); \r\n            modalOverlay.classList.add('show');\r\n\r\n            modalCallback.classList.remove('hide'); \r\n            modalCallback.classList.add('show');\r\n        }\r\n\r\n        if(e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {\r\n            modalCallback.classList.remove('show');\r\n            modalCallback.classList.add('hide'); \r\n\r\n            modalOverlay.classList.remove('show');\r\n            modalOverlay.classList.add('hide');\r\n            setTimeout(()=> {\r\n                modalCallback.style.display = 'none';\r\n            }, 200);\r\n            setTimeout(()=> {\r\n                modalOverlay.style.display = 'none';\r\n            }, 400);\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\r\n    const scrollBtn = document.querySelector('.up');\r\n    \r\n\r\n    scrollBtn.addEventListener('click', e => {\r\n        document.querySelector('.main-wrapper').scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n\r\n    document.addEventListener('scroll', e => {\r\n        if(e.target.scrollingElement.scrollTop >= document.querySelector('.services-section').offsetTop) {\r\n            scrollBtn.classList.remove('d-none');\r\n        } else {\r\n            scrollBtn.classList.add('d-none');\r\n        }\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = ({\r\n    sliderContent,\r\n    sliderItemClass,\r\n    dotsContentClass,\r\n    dotClass,\r\n    dotActiveClass = 'dot-active',\r\n    slideActiveClass = 'active',\r\n    timer\r\n}) => {\r\n\r\n    if (!sliderContent || !sliderItemClass) {\r\n        return;\r\n    }\r\n    const sliderBlock = document.querySelector(`.${sliderContent}`);\r\n    const sliders = document.querySelectorAll(`.${sliderItemClass}`);\r\n    const dotsContent = document.querySelector(`.${dotsContentClass}`);\r\n\r\n    let currentSlide = 0;\r\n    let dots;\r\n    let interval;\r\n\r\n    const createDots = () => {\r\n        sliders.forEach(() => {\r\n            const dot = document.createElement('li');\r\n            dot.classList.add(dotClass);\r\n            dotsContent.append(dot);\r\n        });\r\n        dots = document.querySelectorAll(`.${dotClass}`);\r\n        dots[currentSlide].classList.add(dotActiveClass);\r\n    };\r\n\r\n    const prevSlide = (elems, idx, className) => {\r\n        elems[idx].classList.remove(className);\r\n    };\r\n\r\n    const nextSlide = (elems, idx, className) => {\r\n        elems[idx].classList.add(className);\r\n    };\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(sliders, currentSlide, slideActiveClass);\r\n        prevSlide(dots, currentSlide, dotActiveClass);\r\n        currentSlide++;\r\n        if (currentSlide >= sliders.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(sliders, currentSlide, slideActiveClass);\r\n        nextSlide(dots, currentSlide, dotActiveClass);\r\n    };\r\n\r\n    const startSlide = (timer = 2000) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches(`.${dotClass}`)) {\r\n            return;\r\n        }\r\n\r\n        prevSlide(sliders, currentSlide, slideActiveClass);\r\n        prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n        if (e.target.classList.contains(dotClass)) {\r\n            dots.forEach((dot, idx) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = idx;\r\n                }\r\n            });\r\n        }\r\n\r\n        if (currentSlide >= sliders.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = sliders.length - 1;\r\n        }\r\n\r\n        nextSlide(sliders, currentSlide, slideActiveClass);\r\n        nextSlide(dots, currentSlide, dotActiveClass);\r\n    });\r\n\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches(`.${dotClass}`)) {\r\n            stopSlide();\r\n        }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches(`.${dotClass}`)) {\r\n            startSlide(timer);\r\n        }\r\n    }, true);\r\n\r\n    createDots();\r\n    startSlide(timer);\r\n\r\n};\n\n//# sourceURL=webpack:///./modules/slider.js?");

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