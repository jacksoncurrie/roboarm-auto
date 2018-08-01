const Gpio = require('pigpio').Gpio;

// Servo Details
const rot = new Gpio(3, {mode: Gpio.OUTPUT});
const forw = new Gpio(15, {mode: Gpio.OUTPUT});
const up = new Gpio(27, {mode: Gpio.OUTPUT});
const ins = new Gpio(24, {mode: Gpio.OUTPUT});

// Start with roboarm in centre
var rotValue = 1450;
var forwValue = 1250;
var upValue = 1500;
var inValue = 1700;

// Move servos to centre
rot.servoWrite(rotValue);
forw.servoWrite(forwValue);
up.servoWrite(upValue);
ins.servoWrite(inValue);