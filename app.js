const Gpio = require('pigpio').Gpio;

// Servo Details
const rot = new Gpio(3, {mode: Gpio.OUTPUT});
const forw = new Gpio(15, {mode: Gpio.OUTPUT});
const up = new Gpio(27, {mode: Gpio.OUTPUT});
const ins = new Gpio(24, {mode: Gpio.OUTPUT});

var moveServo = (servo, position, final, callback) => {
   
    // While not complete
    if(position != final) {
       
        // Which way to move
        position += (position < final) ? 5 : -5;

        // Send to servo
        servo.servoWrite(position)
    
        // Run function again
        setTimeout(() => 
            moveServo(servo, position, final, callback),
            10
        );

    // When complete
    } else
        callback();
}

// Start automation of arm
var automate = () =>

    // Moves the servos
    moveServo(rot, 1450, 2360, () =>
    moveServo(up, 1500, 1300, () =>
    moveServo(forw, 1250, 1700, () =>
    moveServo(ins, 1700, 1100, () =>
    moveServo(up, 1300, 1500, () =>
    moveServo(forward, 1700, 1250, () =>
    moveServo(rotate, 2360, 540, () =>
    moveServo(up, 1500, 1300, () =>
    moveServo(forw, 1250, 1700, () =>
    moveServo(ins, 1100, 1700, () =>
    moveServo(forw, 1700, 1250, () =>
    moveServo(up, 1300, 1500, () =>
    moveServo(rot, 540, 1450, () =>
    moveServo(rot, 1450, 540, () =>
    moveServo(up, 1500, 1300, () =>
    moveServo(forw, 1250, 1700, () =>
    moveServo(ins, 1700, 1100, () =>
    moveServo(up, 1300, 1500, () =>
    moveServo(forw, 1700, 1250, () =>
    moveServo(rot, 540, 2360, () =>
    moveServo(up, 1500, 1300, () =>
    moveServo(forw, 1250, 1700, () =>
    moveServo(ins, 1100, 1700, () =>
    moveServo(forw, 1700, 1250, () =>
    moveServo(up, 1300, 1500, () =>
    moveServo(rot, 2360, 1450, () =>
    automate()
    ))))))))))))))))))))))))));

automate();