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
        if(stopwatch.seconds < 10){
            seconds.innerHTML = "0" + stopwatch.seconds;
        }
    }


    start(){
        var self = this;
        function go() {
            ++self.seconds;
            self.getTime();



            timerID = setTimeout(go, 1000);

            if(self.seconds === 60){
                ++self.minutes;
                minutes.innerHTML = self.minutes;
                self.seconds = "0" + 0;
                seconds.innerHTML = self.seconds;
            }
        }

        go();
    }


    clear(){
        this.seconds = 0;
        this.minutes = 0;
        this.getTime();
    }


    stop(){
        clearTimeout(timerID);
    }

    createStopwatch(){
        return new Stopwatch(0, 0);
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
