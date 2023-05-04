input.onButtonPressed(Button.A, function () {
    cakLandServos.resetServos(cakLandServos.ServoPin.P0)
})
let forwardQ = 0
images.createBigImage(`
    . . . . # . . . . .
    . . . # . . . . # .
    # . # . . # # # # #
    . # . . . . . . # .
    . . . . . . . . . .
    `).scrollImage(1, 200)
cakLandServos.resetServos(cakLandServos.ServoPin.P0)
cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.UP)
cakLandPump.pumpStart(cakLand.BoardSide.RIGHT, 34)
basic.forever(function () {
	
})
loops.everyInterval(2300, function () {
    images.createImage(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `).showImage(0)
    cakLandMotor.turnLeft(63)
    basic.pause(500)
    if (forwardQ == 1) {
        cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.MIDDLE)
        images.createImage(`
            # . # . .
            # . # # .
            # . # # #
            # . # # .
            # . # . .
            `).showImage(0)
        basic.pause(500)
        forwardQ = 0
    } else {
        cakLandMotor.stop()
        images.createImage(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `).showImage(0)
        cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.HALF_DOWN)
        forwardQ = 1
        basic.pause(500)
    }
})
