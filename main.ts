let Count = 0
let Mode = 0
basic.forever(function () {
    if (Mode == 0) {
        basic.showString("X")
        control.waitMicros(1500)
    }
    while (Mode == 0) {
        if (input.buttonIsPressed(Button.A)) {
            Count += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Count += 1
        }
        Mode = Math.abs(Count % 3)
        led.plotBarGraph(
        input.acceleration(Dimension.X) + 1023,
        2046
        )
    }
    if (Mode == 1) {
        basic.showString("Y")
        control.waitMicros(1500)
    }
    while (Mode == 1) {
        if (input.buttonIsPressed(Button.A)) {
            Count += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Count += 1
        }
        Mode = Math.abs(Count % 3)
        led.plotBarGraph(
        input.acceleration(Dimension.Y) + 1023,
        2046
        )
    }
    if (Mode == 2) {
        basic.showString("Z")
        control.waitMicros(1500)
    }
    while (Mode == 2) {
        if (input.buttonIsPressed(Button.A)) {
            Count += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Count += 1
        }
        Mode = Math.abs(Count % 3)
        led.plotBarGraph(
        input.acceleration(Dimension.Z) + 1023,
        2046
        )
    }
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, (input.acceleration(Dimension.X) + 1023) / 2)
    pins.analogWritePin(AnalogPin.P1, (input.acceleration(Dimension.Y) + 1023) / 2)
    pins.analogWritePin(AnalogPin.P2, (input.acceleration(Dimension.Z) + 1023) / 2)
})
