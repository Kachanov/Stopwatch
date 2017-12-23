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

}

var stopwatch = new Stopwatch(0, 0, 0);

var startButton = document.getElementById("start-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

/*
startButton.onclick = function (event) {
    stopwatch.start();
};*/

startButton.onclick = () => stopwatch.start();