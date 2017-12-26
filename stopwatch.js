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
        //var self = this;
        const go = () => {
            ++this.seconds;
            this.getTime();

            timerID = setTimeout(go, 1000);

            if(this.seconds === 60){
                ++this.minutes;
                minutes.innerHTML = this.minutes;
                this.seconds = "0" + 0;
                seconds.innerHTML = this.seconds;
            }
        };

        go();

    };


    clear(){
        this.seconds = 0;
        this.minutes = 0;
        this.getTime();
    }


    stop(){
        clearTimeout(timerID);
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
