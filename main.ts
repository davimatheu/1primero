for (let index = 0; index < 4; index++) {
    music.play(music.stringPlayable("F B C5 A B G B C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # #
        # . . . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        # # . # #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        # # . # .
        . . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
}
