class Stopwatch{

    constructor(minutes, seconds){
        this.seconds = seconds;
        this.minutes = minutes;
    }


    getTime() {
        console.log(this.minutes, this.seconds);
        seconds.innerHTML = this.seconds;
        minutes.innerHTML = this.minutes
    }


    start(){
        setTimeout(function go() {
            ++stopwatch.seconds;
            stopwatch.getTime();
            setTimeout(go, 1000);

            if(stopwatch.seconds === 60){
                ++stopwatch.minutes;
                minutes.innerHTML = stopwatch.minutes;
                stopwatch.seconds = 0;
                seconds.innerHTML = stopwatch.seconds;
            }
        }, 1000);
    }


    clear(){
        this.seconds = 0;
        this.minutes = 0;
        this.getTime();
    }


    stop(){

    }

}

var stopwatch = new Stopwatch(0, 0);

var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var clearButton = document.getElementById("clear-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");


startButton.onclick = () => stopwatch.start();
stopButton.onclick = () => stopwatch.stop();
clearButton.onclick = () => stopwatch.clear();

/*startButton.onclick = function () {
    stopwatch.start();
};*/
