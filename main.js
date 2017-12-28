var startPauseButton = document.getElementById("start-pause-button");
var stopButton = document.getElementById("stop-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var lapButton = document.getElementById("lap-button");
var secondsArrow = document.getElementById("seconds-arrow");
var minutesArrow = document.getElementById("minutes-arrow");
var lapsCart = document.getElementById("laps");

var isStart = false;

startPauseButton.onclick = () => {
<<<<<<< Updated upstream
    startTime = Date.now();
=======
>>>>>>> Stashed changes
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
