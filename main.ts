input.onButtonPressed(Button.A, function () {
    cakLandServos.resetServos(cakLandServos.ServoPin.P0)
})
let forwardQ = 0
images.createBigImage(`
    . . . . # . . . . .
    . . . # . . . . . .
    # . # . . . . . . .
    . # . . . . . . . .
    . . . . . . . . . .
    `).showImage(0)
cakLandServos.resetServos(cakLandServos.ServoPin.P0)
cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.UP)
cakLandMotor.turnLeft(63)
basic.forever(function () {
    cakLandPump.pumpStart(cakLand.BoardSide.RIGHT, 34)
    if (forwardQ == 1) {
        images.createImage(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `).showImage(0)
        cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.MIDDLE)
        basic.pause(500)
        forwardQ = 0
    } else {
        images.createImage(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
        cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.HALF_DOWN)
        forwardQ = 1
        basic.pause(500)
    }
})
loops.everyInterval(750, function () {
	
})
