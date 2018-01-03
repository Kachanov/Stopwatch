import {Stopwatch} from "./stopwatch";
import {startPauseButton,stopButton, lapButton, lapsCart} from "../src/UI";

var stopwatch = new Stopwatch(0, 0);

var isStart = false;
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
    }else{
        newLap.innerHTML = "" + laps[laps.length - 1] + "";
        newLap.style.textAlign = "center";
        lapsCart.appendChild(newLap);
    }
};
