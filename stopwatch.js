var timerID;
class Stopwatch{

    constructor(minutes, seconds){
        this.seconds = seconds;
        this.minutes = minutes;
    }


    getTime() {
        console.log(this.minutes, this.seconds);
        seconds.innerHTML = this.seconds;
        minutes.innerHTML = this.minutes;

        if(this.seconds < 10){
            seconds.innerHTML = "0" + this.seconds;
        }
    }


    start(){
        const go = () => {
            ++this.seconds;
            this.getTime();
            this.rotateSecondsArrow();

            if(this.seconds === 60){
                ++this.minutes;
                minutes.innerHTML = this.minutes;
                this.seconds = "0" + 0;
                seconds.innerHTML = this.seconds;
            }
        };

        timerID = setInterval(go, 1000);
        go();
    };


    clear(){
        this.seconds = 0;
        this.minutes = 0;
        this.getTime();

        this.clearSecondsArrow();
    }


    stop(){
        clearInterval(timerID);
    }


    rotateSecondsArrow(){
        degree = degree + 6;
        secondsArrow.style.transform = "rotate(" + degree + "deg)";
    }


    clearSecondsArrow(){
        degree = 0;
        secondsArrow.style.transform = "rotate(" + degree + "deg)";
    }

}

var stopwatch = new Stopwatch(0, 0);

var startStopButton = document.getElementById("start-stop-button");
var clearButton = document.getElementById("clear-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var lapButton = document.getElementById("lap-button");
var secondsArrow = document.getElementById("seconds-arrow");


var isStart = false;
var degree = 0;

startStopButton.onclick = () => {
    if(isStart === false) {
        stopwatch.start();
        isStart = true;
        startStopButton.classList.add("isStart");
        startStopButton.innerHTML = "Stop";
    }else{
        stopwatch.stop();
        isStart = false;
        startStopButton.classList.remove("isStart");
        startStopButton.innerHTML = "Start";
    }
};

clearButton.onclick = () => stopwatch.clear();

var laps = new Array();
lapButton.onclick = () => {
    laps.push(stopwatch.minutes + ":" + stopwatch.seconds);
    console.log(laps);
};


/*startButton.onclick = function () {
    stopwatch.start();
};*/
