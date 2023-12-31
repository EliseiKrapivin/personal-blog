/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/canvas.js":
/*!*********************************!*\
  !*** ./src/assets/js/canvas.js ***!
  \*********************************/
/***/ (function() {

eval("var canvas = document.getElementById('myCanvas');\r\n  var context = canvas.getContext('2d');\r\n  var isDrawing = false;\r\n  var userInput = [];\r\n\r\n  canvas.addEventListener('mousedown', startDrawing);\r\n  canvas.addEventListener('mousemove', draw);\r\n  canvas.addEventListener('mouseup', stopDrawing);\r\n  canvas.addEventListener('mouseleave', stopDrawing);\r\n\r\n  function startDrawing(e) {\r\n    isDrawing = true;\r\n    context.beginPath();\r\n    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);\r\n    userInput.push('mousedown');\r\n  }\r\n\r\n  function draw(e) {\r\n\r\n    context.lineWidth = 2;\r\n    context.lineCap = 'round';\r\n    context.strokeStyle = '#000';\r\n\r\n    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);\r\n    context.stroke();\r\n    context.beginPath();\r\n    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);\r\n\r\n    userInput.push('mousemove');\r\n  }\r\n\r\n  function stopDrawing() {\r\n    isDrawing = false;\r\n\r\n    // Проверяем, было ли нарисовано тире\r\n    if (userInput.length > 5) { // Минимальная длина для нарисованного тире\r\n      context.font = '20px Arial';\r\n      context.fillStyle = 'white'\r\n      context.fillText('-', 10, 30); // Отображаем тире на холсте\r\n    }\r\n    }\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/canvas.js?");

/***/ }),

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst page = document.getElementById('page');\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event => {\r\n    if (body.classList.contains('show-sidebar')){\r\n        closeSidebar();\r\n    } else {\r\n        showSidebar();\r\n    }\r\n});\r\n\r\nfunction showSidebar() {\r\n    let mask = document.createElement('div');\r\n    mask.classList.add('page__mask');\r\n    mask.addEventListener('click', closeSidebar);\r\n    page.appendChild(mask);\r\n\r\n    body.classList.add('show-sidebar');\r\n}\r\n\r\nfunction closeSidebar(){\r\n    body.classList.remove('show-sidebar');\r\n    document.querySelector('.page__mask').remove();\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach (item => {\r\n    item.addEventListener('click', event => {\r\n        let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute ('data-modal');\r\n        let modal = document.getElementById(modalId);\r\n        let modalContent = modal.querySelector('.modal__content');\r\n\r\n        modalContent.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        })\r\n\r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n\r\n        setTimeout(function () {\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        }, 1);\r\n        \r\n    });\r\n});\r\n\r\nmodalClose.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n\r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\nmodal.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget;\r\n\r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\nfunction closeModal(currentModal){\r\n    let modalContent = currentModal.querySelector('.modal__content');\r\n    modalContent.removeAttribute('style');\r\n    setTimeout(() => {\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n    }, 200);\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\r\n  const slider = document.querySelector(\".slider\");\r\n  const slides = document.querySelectorAll(\".slide\");\r\n  const prevBtn = document.querySelector(\".prev\");\r\n  const nextBtn = document.querySelector(\".next\");\r\n\r\n  let currentIndex = 0;\r\n\r\n  function showSlide(index) {\r\n    if (index < 0) {\r\n      currentIndex = slides.length - 1;\r\n    } else if (index >= slides.length) {\r\n      currentIndex = 0;\r\n    } else {\r\n      currentIndex = index;\r\n    }\r\n\r\n    const translateValue = -currentIndex * 100 + \"%\";\r\n    slider.style.transform = \"translateX(\" + translateValue + \")\";\r\n  }\r\n\r\n  function showNextSlide() {\r\n    showSlide(currentIndex + 1);\r\n  }\r\n\r\n  function showPrevSlide() {\r\n    showSlide(currentIndex - 1);\r\n  }\r\n\r\n  prevBtn.addEventListener(\"click\", showPrevSlide);\r\n  nextBtn.addEventListener(\"click\", showNextSlide);\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/script.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\ntextArea.forEach(item => {\r\n    let textAreaH = item.offsetHeight;\r\n    item.addEventListener('input', event => {\r\n        let $this = event.target;\r\n\r\n        $this.style.height = textAreaH + 'px';\r\n        $this.style.height = $this.scrollHeight + 'px';\r\n\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/canvas.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	__webpack_modules__["./src/assets/js/script.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;