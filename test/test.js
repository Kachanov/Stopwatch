import {Stopwatch} from "../src/js/stopwatch";
import {stopwatch} from "../src/js/main";

var assert = require("assert");


/*import {Stopwatch} from "../src/stopwatch";
import {startTime, currentTime, timer, timerID, pauseTime, stopwatch} from "../src/stopwatch";
import {minutes, seconds, minutesArrowPlace, secondsArrowPlace} from "../src/main";*/

describe("array", function () {
    describe("#indexOf()", function () {
        it("should return -1 when the value is not present", function () {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

describe("stopwatch_object", function () {

    describe("#new Stopwatch(0, 0)", function () {
       it("should return new object", function () {
           assert.equal(typeof new Stopwatch(0, 0), "object");
       });
    });

    describe("#stopwatch.showSeconds() and stopwatch.showMinutes()", function () {
        it("should return stopwatch`s current time", function () {
            assert.equal(stopwatch.getSeconds(), stopwatch.seconds);
            assert.equal(stopwatch.getMinutes(), stopwatch.minutes);
        });
    });

});
