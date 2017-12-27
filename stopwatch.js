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
                this.rotateMinutesArrow();

                minutes.innerHTML = this.minutes;
                this.seconds = "0" + 0;
                seconds.innerHTML = this.seconds;
            }
        };

        timerID = setInterval(go, 100);
        go();
    };


    clear(){
        this.seconds = 0;
        this.minutes = 0;
        this.getTime();

        this.clearSecondsArrow();
        this.rotateMinutesArrow();
    }


    stop(){
        clearInterval(timerID);
    }


    rotateSecondsArrow(){
        secondsArrow.style.transform = "rotate(" + this.seconds * 6 + "deg)";
    }


    clearSecondsArrow(){
        degree = 0;
        this.rotateSecondsArrow();
    }

    rotateMinutesArrow(){
        minutesArrow.style.transform = "rotate(" + this.minutes * 6 + "deg)";
    }

}

var stopwatch = new Stopwatch(0, 0);

var startPauseButton = document.getElementById("start-pause-button");
var stopButton = document.getElementById("stop-button");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var lapButton = document.getElementById("lap-button");
var secondsArrow = document.getElementById("seconds-arrow");
var minutesArrow = document.getElementById("minutes-arrow");


var isStart = false;
var degree = 0;

startPauseButton.onclick = () => {
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

stopButton.onclick = () => stopwatch.clear();

var laps = new Array();
lapButton.onclick = () => {
    laps.push(stopwatch.minutes + ":" + stopwatch.seconds);
    console.log(laps);
    this.rotateMinutesArrow();
};

