import "../styles/styles.css";
import clock_face from "../images/clockface.png";
import seconds_arrow from "../images/seconds-arrow.png";
import minutes_arrow from "../images/minutes-arrow.png";

export {startPauseButton,stopButton,minutes, seconds, lapButton, secondsArrowPlace, minutesArrowPlace, lapsCart, clockFacePlace, secondsArrow, minutesArrow};
export {clockFace};

let startPauseButton = document.getElementById("start-pause-button");
let stopButton = document.getElementById("stop-button");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let lapButton = document.getElementById("lap-button");
let secondsArrowPlace = document.getElementById("seconds-arrow");
let minutesArrowPlace = document.getElementById("minutes-arrow");
let lapsCart = document.getElementById("laps");
let clockFacePlace = document.getElementById("clock_face");


let clockFace = new Image();
clockFace.src = clock_face;
clockFacePlace.appendChild(clockFace);

let secondsArrow = new Image();
secondsArrow.src = seconds_arrow;
secondsArrowPlace.appendChild(secondsArrow);

let minutesArrow = new Image();
minutesArrow.src = minutes_arrow;
minutesArrowPlace.appendChild(minutesArrow);

