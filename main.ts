input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
basic.forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
