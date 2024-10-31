/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var call = document.querySelector(\"#call\");\n  var order = document.querySelector(\"#order\");\n  var userApi = document.querySelector(\"#userApi\");\n  var more = document.querySelector(\"#investments .more\");\n  var items = document.querySelectorAll(\".item\");\n  var closeForm = document.querySelector(\"#call .close\");\n  var request = document.querySelector(\"#request\");\n  var hamburgerMenu = document.querySelector(\"#hamburger_menu\");\n  var topmenu = document.querySelector(\"#header .cell:nth-child(2)\");\n  var span1 = document.querySelector(\"#hamburger_menu .first_child\");\n  var span2 = document.querySelector(\"#hamburger_menu .last_shild\");\n  var span3 = document.querySelector(\"#hamburger_menu .center\");\n  console.log(span1, span2, span3);\n  items.forEach(function (element) {\n    element.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      disabledScroll();\n      call.classList.add(\"show_callback\");\n    });\n  });\n  order.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    call.classList.add(\"show_callback\");\n    call.classList.remove(\"hide_callback\");\n    disabledScroll();\n  });\n  userApi.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    call.style.display = \"none\";\n    request.classList.add(\"show_request\");\n  });\n  closeForm.addEventListener(\"click\", function () {\n    anabladeScroll();\n    call.classList.remove(\"show_callback\");\n    call.classList.add(\"hide_callback\");\n  });\n  hamburgerMenu.addEventListener(\"click\", function () {\n    topmenu.classList.toggle(\"show_hamburger\");\n    span1.classList.toggle(\"icon1\");\n    span2.classList.toggle(\"icon3\");\n    span3.classList.toggle(\"none\");\n  });\n  function disabledScroll() {\n    document.body.style.cssText = \"\\n        overflow: hidden;\\n        position: relative;\\n        height: 100vh;   \";\n  }\n  function anabladeScroll() {\n    document.body.style.cssText = \"\\n        overflow: visible;\\n        position: relative;\\n        height: 100vh;   \\n        \";\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;