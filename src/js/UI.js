import "../styles/styles.css";
import clock_face from "../images/clockface.png";
import seconds_arrow from "../images/seconds-arrow.png";
import minutes_arrow from "../images/minutes-arrow.png";

export {startPauseButton,stopButton,minutes, seconds, lapButton, secondsArrowPlace, minutesArrowPlace, lapsCart, clockFacePlace, secondsArrow, minutesArrow};
export {clockFace};

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
clockFace.src = clock_face;
clockFacePlace.appendChild(clockFace);

var secondsArrow = new Image();
secondsArrow.src = seconds_arrow;
secondsArrowPlace.appendChild(secondsArrow);

var minutesArrow = new Image();
minutesArrow.src = minutes_arrow;
minutesArrowPlace.appendChild(minutesArrow);

