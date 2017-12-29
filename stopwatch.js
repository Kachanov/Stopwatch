var timerID;
var startTime, currentTime, timer;
<<<<<<< Updated upstream
var pauseTime = 0;
=======
var stopTime;
var started = false;

>>>>>>> Stashed changes
class Stopwatch{

    constructor(minutes, seconds){
        this.seconds = seconds;
        this.minutes = minutes;
    }


    getTime() {
        seconds.innerHTML = this.seconds;
        minutes.innerHTML = this.minutes;

        if(this.seconds < 10){
            seconds.innerHTML = "0" + this.seconds;
        }
    }


    start(){

        const go = () => {
<<<<<<< Updated upstream
            currentTime = Date.now();
            timer = new Date(currentTime + pauseTime - startTime);
            this.seconds = timer.getSeconds();
=======
            currentTime = new Date();
            if(started === false) {
                startTime = new Date();
                started = true;
            }else{
                startTime = stopTime;
            }
            timer = new Date(currentTime - startTime);

            this.seconds = timer.getSeconds()
>>>>>>> Stashed changes
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
        pauseTime = 0;
        this.getTime();

        this.rotateSecondsArrow();
        this.rotateMinutesArrow();
    }


<<<<<<< Updated upstream
    pause(){
=======
    stop(){
        stopTime = new Date();
>>>>>>> Stashed changes
        clearInterval(timerID);
        pauseTime = +timer;
    }


    rotateSecondsArrow(){
        secondsArrow.style.transform = "rotate(" + this.seconds * 6 + "deg)";
    }

    rotateMinutesArrow(){
        minutesArrow.style.transform = "rotate(" + this.minutes * 6 + "deg)";
    }

}

var stopwatch = new Stopwatch(0, 0);