input.onButtonPressed(Button.A, function () {
    Count += -1
    Mode = Math.abs(Count % 3)
})
input.onButtonPressed(Button.B, function () {
    Count += 1
    Mode = Math.abs(Count % 3)
})
let Mode = 0
let Count = 0
Count = 1000
Mode = 0
basic.forever(function () {
    while (Mode == 0) {
        led.plotBarGraph(
        input.acceleration(Dimension.X) + 1023,
        2046
        )
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            break;
        }
    }
    while (Mode == 1) {
        led.plotBarGraph(
        input.acceleration(Dimension.Y) + 1023,
        2046
        )
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            break;
        }
    }
    while (Mode == 2) {
        led.plotBarGraph(
        input.acceleration(Dimension.Z) + 1023,
        2046
        )
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
