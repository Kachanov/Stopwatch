class Stopwatch{

    constructor(minutes, seconds, milliseconds){
        this.milliseconds = milliseconds;
        this.seconds = seconds;
        this.minutes = minutes;
    }


    getTime(){
        console.log(this.minutes, this.seconds, this.milliseconds);
        seconds.innerHTML = this.seconds;
    }


    start(){
        setTimeout(function go() {
            stopwatch.getTime();
            setTimeout(go, 1000);
            ++stopwatch.seconds;

            if(stopwatch.seconds == 60){
                ++stopwatch.minutes;
                minutes.innerHTML = stopwatch.minutes + ":";
                stopwatch.seconds = 0;
                seconds.innerHTML = "0";
            }
        }, 0);
    }


    clear(){
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
    }


    stop(){

    }

}

var stopwatch = new Stopwatch(0, 0, 0);

var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var clearButton = document.getElementById("clear-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");


startButton.onclick = () => stopwatch.start();
stopButton.onclick = () => stopwatch.stop();
clearButton.onclick = () => stopwatch.clear();

/*
startButton.onclick = function (event) {
    stopwatch.start();
};*/