input.onButtonPressed(Button.A, function () {
	
})
let forwardQ = 0
images.createImage(`
    # . # . #
    # . # . #
    # . # # #
    # . # . #
    # . # . #
    `).showImage(0)
loops.everyInterval(1000, function () {
    if (forwardQ == 1) {
        images.createImage(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `).showImage(0)
        cakLandServos.turnServo(cakLandServos.ServoPin.P0, 90)
        forwardQ = 0
    } else {
        images.createImage(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `).showImage(0)
        cakLandServos.turnServo(cakLandServos.ServoPin.P0, 0)
        forwardQ = 1
    }
})
basic.forever(function () {
    cakLandMotor.turnLeft(63)
})
