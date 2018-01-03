import _ from "lodash";
import {Stopwatch} from "./stopwatch.js";
import {startTime, currentTime, timer, timerID, pauseTime, stopwatch} from "./stopwatch";
export {minutes, seconds, minutesArrow, secondsArrow};
import "./styles.css";

import clockFace from "./clockface.png";
import secArrow from "./seconds-arrow.png";
import minArrow from "./minutes-arrow.png";
var myClockFace = new Image();
myClockFace.src = clockFace;
var mySecArrow = new Image();
mySecArrow.src = secArrow;
var myMinArrow = new Image();
myMinArrow.src = minArrow;

var startPauseButton = document.getElementById("start-pause-button");
var stopButton = document.getElementById("stop-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var lapButton = document.getElementById("lap-button");
var secondsArrow = document.getElementById("seconds-arrow");
var minutesArrow = document.getElementById("minutes-arrow");
var lapsCart = document.getElementById("laps");
var clock_face = document.getElementById("clock_face");

var isStart = false;



clock_face.appendChild(myClockFace);
secondsArrow.appendChild(mySecArrow);
minutesArrow.appendChild(myMinArrow);


startPauseButton.onclick = () => {
    if(isStart === false) {
        stopwatch.start();
        isStart = true;
        startPauseButton.classList.add("isStart");
        startPauseButton.innerHTML = "Pause";
    }else{
        stopwatch.pause();
        isStart = false;
        startPauseButton.classList.remove("isStart");
        startPauseButton.innerHTML = "Start";
    }
};

stopButton.onclick = () => {
    stopwatch.pause();
    isStart = false;
    startPauseButton.classList.remove("isStart");
    startPauseButton.innerHTML = "Start";

    stopwatch.stop();
    laps = [];
    lapsCart.innerHTML = "";
};



var laps = new Array();
lapButton.onclick = function() {
    laps.push(stopwatch.minutes + ":" + stopwatch.seconds);
    console.log(laps);

    var newLap = document.createElement("div");
    if(laps.length > 5){
        lapsCart.lastElementChild.innerHTML = laps[laps.length - 1];
    }else {
        newLap.innerHTML = "" + laps[laps.length - 1] + "";
        newLap.style.textAlign = "center";
        lapsCart.appendChild(newLap);
    }
};
