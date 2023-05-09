input.onButtonPressed(Button.A, function () {
    cakLandServos.resetServos(cakLandServos.ServoPin.P0)
})
let forwardQ = 0
let tooWetQ = 0
images.createBigImage(`
    . . . . # . . . . .
    . . . # . . . . # .
    # . # . . # # # # #
    . # . . . . . . # .
    . . . . . . . . . .
    `).scrollImage(1, 200)
let imgForward = images.createImage(`
    # . # . .
    # . # # .
    # . # # #
    # . # # .
    # . # . .
    `)
let imgPause = images.createImage(`
    . . . . .
    . # . # .
    . # . # .
    . # . # .
    . . . . .
    `)
let imgDown = images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    . . # . .
    `)
let imgWet = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
cakLandServos.resetServos(cakLandServos.ServoPin.P0)
cakLandServos.setServoPosition(cakLandServos.ServoPin.P0, cakLandServos.Position.UP)
cakLandPump.pumpStart(cakLand.BoardSide.RIGHT, 34)
basic.forever(function () {
    if (cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.VERY_WET)) {
        tooWetQ = 1
        imgWet.showImage(0)
    } else {
        tooWetQ = 0
    }
    if (cakLandTouch.getTouch(cakLandTouch.TouchPin.P1)) {
        imgDown.showImage(0)
        cakLandMotor.turnRight(50)
        basic.pause(500)
        cakLandMotor.turnRight(0)
    }
})
loops.everyInterval(2300, function () {
    if (tooWetQ == 0) {
        imgForward.showImage(0)
    }
    if (tooWetQ > 0) {
        cakLandMotor.turnLeft(20)
    } else {
        cakLandMotor.turnLeft(63)
        basic.pause(500)
        cakLandMotor.stop()
        if (forwardQ == 1) {
            imgPause.showImage(0)
            basic.pause(500)
            forwardQ = 0
        } else {
            imgDown.showImage(0)
            basic.pause(300)
            cakLandMotor.turnRight(50)
            forwardQ = 1
            basic.pause(200)
            cakLandMotor.stop()
        }
    }
})
