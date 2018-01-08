import {Stopwatch} from "../src/js/stopwatch";
/*var Stopwatch = require("../src/js/stopwatch");*/
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
    it('new Stopwatch() should return new object ', function () {
        assert.equal(typeof new Stopwatch(0, 0), "object");
    });
});