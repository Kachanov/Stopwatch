/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return startPauseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return stopButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return minutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lapButton; });
/* unused harmony export secondsArrowPlace */
/* unused harmony export minutesArrowPlace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lapsCart; });
/* unused harmony export clockFacePlace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return secondsArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return minutesArrow; });
/* unused harmony export clockFace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_clockface_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_clockface_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__images_clockface_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_seconds_arrow_png__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_seconds_arrow_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__images_seconds_arrow_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_minutes_arrow_png__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_minutes_arrow_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__images_minutes_arrow_png__);








var startPauseButton = document.getElementById("start-pause-button");
var stopButton = document.getElementById("stop-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var lapButton = document.getElementById("lap-button");
var secondsArrowPlace = document.getElementById("seconds-arrow");
var minutesArrowPlace = document.getElementById("minutes-arrow");
var lapsCart = document.getElementById("laps");
var clockFacePlace = document.getElementById("clock_face");


var clockFace = new Image();
clockFace.src = __WEBPACK_IMPORTED_MODULE_1__images_clockface_png__["default"];
clockFacePlace.appendChild(clockFace);

var secondsArrow = new Image();
secondsArrow.src = __WEBPACK_IMPORTED_MODULE_2__images_seconds_arrow_png__["default"];
secondsArrowPlace.appendChild(secondsArrow);

var minutesArrow = new Image();
minutesArrow.src = __WEBPACK_IMPORTED_MODULE_3__images_minutes_arrow_png__["default"];
minutesArrowPlace.appendChild(minutesArrow);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stopwatch__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UI__ = __webpack_require__(0);



var stopwatch = new __WEBPACK_IMPORTED_MODULE_0__stopwatch__["a" /* Stopwatch */](0, 0);

var isStart = false;
__WEBPACK_IMPORTED_MODULE_1__UI__["g" /* startPauseButton */].onclick = () => {
    if(isStart === false) {
        stopwatch.start();
        isStart = true;
        __WEBPACK_IMPORTED_MODULE_1__UI__["g" /* startPauseButton */].classList.add("isStart");
        __WEBPACK_IMPORTED_MODULE_1__UI__["g" /* startPauseButton */].innerHTML = "Pause";
    }else{
        stopwatch.pause();
        isStart = false;
        __WEBPACK_IMPORTED_MODULE_1__UI__["g" /* startPauseButton */].classList.remove("isStart");
        __WEBPACK_IMPORTED_MODULE_1__UI__["g" /* startPauseButton */].innerHTML = "Start";
    }
};

__WEBPACK_IMPORTED_MODULE_1__UI__["h" /* stopButton */].onclick = () => {
    stopwatch.pause();
    isStart = false;
    __WEBPACK_IMPORTED_MODULE_1__UI__["g" /* startPauseButton */].classList.remove("isStart");
    __WEBPACK_IMPORTED_MODULE_1__UI__["g" /* startPauseButton */].innerHTML = "Start";

    stopwatch.stop();
    laps = [];
    __WEBPACK_IMPORTED_MODULE_1__UI__["b" /* lapsCart */].innerHTML = "";
};



var laps = new Array();
__WEBPACK_IMPORTED_MODULE_1__UI__["a" /* lapButton */].onclick = function() {
    laps.push(stopwatch.minutes + ":" + stopwatch.seconds);
    console.log(laps);

    var newLap = document.createElement("div");
    if(laps.length > 5){
        __WEBPACK_IMPORTED_MODULE_1__UI__["b" /* lapsCart */].lastElementChild.innerHTML = laps[laps.length - 1];
    }else{
        newLap.innerHTML = "" + laps[laps.length - 1] + "";
        newLap.style.textAlign = "center";
        __WEBPACK_IMPORTED_MODULE_1__UI__["b" /* lapsCart */].appendChild(newLap);
    }
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UI__ = __webpack_require__(0);
var timerID;
var startTime, currentTime, timer;
var pauseTime = 0;


class Stopwatch{

    constructor(minutes, seconds){
        this.seconds = seconds;
        this.minutes = minutes;
    }


    getTime() {
        __WEBPACK_IMPORTED_MODULE_0__UI__["e" /* seconds */].innerHTML = this.seconds;
        __WEBPACK_IMPORTED_MODULE_0__UI__["c" /* minutes */].innerHTML = this.minutes;

        if(this.seconds < 10){
            __WEBPACK_IMPORTED_MODULE_0__UI__["e" /* seconds */].innerHTML = "0" + this.seconds;
        }
    }


    start(){
        startTime = Date.now();
        const go = () => {
            currentTime = Date.now();
            timer = new Date(currentTime + pauseTime - startTime);
            this.seconds = timer.getSeconds();
            this.minutes = timer.getMinutes();
            this.getTime();

            this.rotateSecondsArrow();
            this.rotateMinutesArrow();
        };

        timerID = setInterval(go, 1000);
        go();
    };


    stop(){
        this.seconds = 0;
        this.minutes = 0;
        pauseTime = 0;
        this.getTime();

        this.rotateSecondsArrow();
        this.rotateMinutesArrow();
    }


    pause(){
        clearInterval(timerID);
        pauseTime = +timer;
    }


    rotateSecondsArrow(){
        __WEBPACK_IMPORTED_MODULE_0__UI__["f" /* secondsArrow */].style.transform = "rotate(" + this.seconds * 6 + "deg)";
    }

    rotateMinutesArrow(){
        __WEBPACK_IMPORTED_MODULE_0__UI__["d" /* minutesArrow */].style.transform = "rotate(" + this.minutes * 6 + "deg)";
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stopwatch;




/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .stopwatch{\n|     display: flex;\n|     flex-direction: column;");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ })
/******/ ]);