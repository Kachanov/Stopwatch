var startPauseButton = document.getElementById("start-pause-button");
var stopButton = document.getElementById("stop-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var lapButton = document.getElementById("lap-button");
var secondsArrow = document.getElementById("seconds-arrow");
var minutesArrow = document.getElementById("minutes-arrow");

var isStart = false;
var startTime, currentTime;

startPauseButton.onclick = () => {
    startTime = new Date();
    if(isStart === false) {
        stopwatch.start();
        isStart = true;
        startPauseButton.classList.add("isStart");
        startPauseButton.innerHTML = "Pause";
    }else{
        stopwatch.stop();
        isStart = false;
        startPauseButton.classList.remove("isStart");
        startPauseButton.innerHTML = "Start";
    }
};

stopButton.onclick = () => {
    stopwatch.clear();
};

var laps = new Array();
lapButton.onclick = () => {
    laps.push(stopwatch.minutes + ":" + stopwatch.seconds);
    console.log(laps);
    this.rotateMinutesArrow();
};



