radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    ZA = 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    ZA = 0
    Z += 1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    radio.sendNumber(Z)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    ZA = 0
    Z += -1
})
let Z = 0
let ZA = 0
ZA = 0
radio.setGroup(255)
Z = 0
basic.forever(function () {
    if (ZA == 0) {
        basic.showNumber(Z, 0)
    }
})
