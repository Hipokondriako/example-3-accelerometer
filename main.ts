// When button A is pressed, "Count" is reduced by  1, and mode changed
input.onButtonPressed(Button.A, function () {
    Count += -1
    Mode = Math.abs(Count % 3)
})
// When button B is pressed, "Count" is reduced by 1, and mode changed
input.onButtonPressed(Button.B, function () {
    Count += 1
    // "Mode" is the remainder of "Count" divided by 3, in positive
    Mode = Math.abs(Count % 3)
})
// On start, count is 999 and mode is 0
let Mode = 0
let Count = 0
Count = 999
Mode = 0
basic.forever(function () {
    // Everything inside the while loop will happen as long as "Mode" is set to 0
    while (Mode == 0) {
        // The LED  panel will show the change in the X accelerometer 
        led.plotBarGraph(
        input.acceleration(Dimension.X) + 1023,
        2046
        )
        // A small pause allows the program to "breathe" and check if any button has been pressed
        basic.pause(6)
    }
    // In Mode 1, the LED panel shows Y accelerometer
    while (Mode == 1) {
        led.plotBarGraph(
        input.acceleration(Dimension.Y) + 1023,
        2046
        )
        basic.pause(6)
    }
    // In Mode 2, the LED panel shows Z accelerometer
    while (Mode == 2) {
        led.plotBarGraph(
        input.acceleration(Dimension.Z) + 1023,
        2046
        )
        basic.pause(6)
    }
})
