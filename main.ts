input.onButtonPressed(Button.A, function () {
    if (xposition != 0) {
        led.unplot(xposition, 4)
        xposition += -1
        led.plot(xposition, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (xposition != 4) {
        led.unplot(xposition, 4)
        xposition += 1
        led.plot(xposition, 4)
    }
})
let xposition = 0
basic.clearScreen()
xposition = 2
led.plot(xposition, 4)
