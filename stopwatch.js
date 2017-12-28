var timerID;
var startTime, currentTime, timer;
var pauseTime = 0;
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
        startTime = Date.now();
        const go = () => {
            currentTime = Date.now();
            timer = new Date(currentTime + pauseTime - startTime);
            this.seconds = timer.getSeconds();
            this.minutes = timer.getMinutes();
            this.getTime();

            this.rotateSecondsArrow();
            this.rotateMinutesArrow();
        };

        timerID = setInterval(go, 1000);
        go();
    };


    stop(){
        this.seconds = 0;
        this.minutes = 0;
        this.getTime();

        this.clearSecondsArrow();
        this.rotateMinutesArrow();
    }


    pause(){
        clearInterval(timerID);
        pauseTime = +timer;
        console.log(pauseTime);
    }


    rotateSecondsArrow(){
        secondsArrow.style.transform = "rotate(" + this.seconds * 6 + "deg)";
    }


    clearSecondsArrow(){
        this.rotateSecondsArrow();
    }

    rotateMinutesArrow(){
        minutesArrow.style.transform = "rotate(" + this.minutes * 6 + "deg)";
    }

}

var stopwatch = new Stopwatch(0, 0);