import {Stopwatch} from "./stopwatch";
import {startPauseButton,stopButton, lapButton, lapsCart} from "./UI";

let stopwatch = new Stopwatch(0, 0);

let isStart = false;
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
    stopwatch.clearLaps();
    lapsCart.innerHTML = "";
};



lapButton.onclick = function() {
    stopwatch.pushLaps();
};
