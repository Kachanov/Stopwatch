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
            currentTime = new Date();
            var newDate = new Date(currentTime - startTime);
            this.seconds = newDate.getSeconds();
            this.minutes = newDate.getMinutes();
            this.getTime();

            this.rotateSecondsArrow();
            this.rotateMinutesArrow();

            this.getTime();

        };

        timerID = setInterval(go, 1000);
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
        this.rotateSecondsArrow();
    }

    rotateMinutesArrow(){
        minutesArrow.style.transform = "rotate(" + this.minutes * 6 + "deg)";
    }

}

var stopwatch = new Stopwatch();