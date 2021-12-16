input.onButtonPressed(Button.A, function () {
    if (Hungry == true) {
        Happy = true
        Hungry = false
        Sleepy = false
        Unhappy_Timer = 20
        Score += 1
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . . . # #
            . . . # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("EATING..." + "SCORE:" + Score)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Sleepy == true) {
        Happy = true
        Hungry = false
        Sleepy = false
        Unhappy_Timer = 20
        Score += 1
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("SLEEPING..." + "SCORE:" + Score)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let Mood_Chance = 0
let Eye_Movement_Chance = 0
let Unhappy_Timer = 0
let Sleepy = false
let Hungry = false
let Happy = false
let Score = 0
Score = 0
Happy = true
Hungry = false
Sleepy = false
let Dead = false
let Eye_Movement_State = 0
Unhappy_Timer = 20
basic.forever(function () {
    Eye_Movement_Chance = randint(0, 100)
    if (Eye_Movement_Chance <= 10) {
        Eye_Movement_State = 2
    } else if (Eye_Movement_Chance > 10 && Eye_Movement_Chance <= 20) {
        Eye_Movement_State = 1
    } else {
        Eye_Movement_State = 0
    }
    if (Happy == true) {
        if (Eye_Movement_State == 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else if (Eye_Movement_State == 1) {
            basic.showLeds(`
                . . . . .
                # . # . .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . # . #
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    }
    basic.pause(2000)
})
basic.forever(function () {
    if (Happy == true) {
        Mood_Chance = randint(0, 5000)
    }
    if (Mood_Chance <= 1) {
        Happy = false
        Hungry = true
        Happy = false
    } else if (Mood_Chance > 1 && Mood_Chance <= 3) {
        Happy = false
        Hungry = false
        Sleepy = true
    } else {
        Happy = true
        Hungry = false
        Sleepy = false
    }
    if ((Hungry == true || Sleepy == true) && Unhappy_Timer == 0) {
        Dead = true
    }
    if (Hungry == true || Sleepy == true) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        Unhappy_Timer += -1
    }
    if (Dead == true) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(8000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("GAME OVER!")
        basic.showString("SCORE:")
        basic.showString("" + (Score))
    }
})
basic.forever(function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
