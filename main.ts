input.onButtonPressed(Button.A, function () {
    mode += 1
    if (mode == 3) {
        mode = 0
    }
    basic.showString("" + (modes[mode]))
})
input.onButtonPressed(Button.AB, function () {
    COZIR.setupCozir()
    basic.showString("x")
})
input.onButtonPressed(Button.B, function () {
    COZIR.calibrateCo2()
    basic.showString("+")
})
let modes: string[] = []
let mode = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
mode = 0
modes = [" PPM", " C", " %RH"]
basic.forever(function () {
    basic.showString("" + (modes[mode]))
    if (mode == 0) {
        basic.showNumber(COZIR.Co2())
    }
    if (mode == 1) {
        basic.showNumber(COZIR.temperature())
    }
    if (mode == 2) {
        basic.showNumber(COZIR.relativeHumidity())
    }
})
