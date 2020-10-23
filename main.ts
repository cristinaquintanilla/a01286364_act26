let height = 0
let cont_short = 0
let sum_height = 0
let cont_medium = 0
let cont_tall = 0
let average_height = 0
let number_dice = 0
let cont_green = 0
let cont_blue = 0
let cont_red = 0
let numbers = 0
let cont_even = 0
let cont_odd = 0
let angle = 0
let cont_obtuse = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        height = randint(100, 200)
        if (height <= 150) {
            basic.showNumber(height)
            basic.showString("Short person")
            cont_short += 1
            sum_height += height
        } else if (height >= 151 && height <= 170) {
            basic.showNumber(height)
            basic.showString("Medium height")
            cont_medium += 1
            sum_height += height
        } else if (height >= 171) {
            basic.showNumber(height)
            basic.showString("Tall person")
            cont_tall += 1
            sum_height += height
        }
    }
    basic.showNumber(cont_short)
    basic.showString("Total Short Person")
    basic.showNumber(cont_medium)
    basic.showString("Total Medium Height")
    basic.showNumber(cont_tall)
    basic.showString("Total Tall Person")
    average_height = sum_height / 3
    basic.showNumber(sum_height)
})
input.onButtonPressed(Button.A, function () {
    number_dice = randint(1, 6)
    if (number_dice == 1 || number_dice == 3) {
        basic.showNumber(number_dice)
        basic.showString("Team Green")
        cont_green += 1
    } else if (number_dice == 2 || number_dice == 5) {
        basic.showNumber(number_dice)
        basic.showString("Team Blue")
        cont_blue += 1
    } else {
        basic.showNumber(number_dice)
        basic.showString("Team Red")
        cont_red += 1
    }
    basic.showString("Team Green")
    basic.showNumber(cont_green)
    basic.showString("Team Blue")
    basic.showNumber(cont_blue)
    basic.showString("Team Red")
    basic.showNumber(cont_red)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        numbers = randint(1, 100)
        basic.showNumber(numbers)
        numbers = numbers % 2
        if (numbers == 0) {
            basic.showString("Even")
            cont_even += 1
        } else {
            basic.showString("Odd")
            cont_odd += 1
        }
    }
    basic.showNumber(cont_even)
    basic.showString("Even")
    basic.showNumber(cont_odd)
    basic.showString("Odd")
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 10; index++) {
        angle = randint(0, 180)
        if (angle < 90) {
            basic.showString("Acute")
        } else if (angle == 90) {
            basic.showString("Straight")
        } else if (angle > 90) {
            basic.showString("Obtuse")
            cont_obtuse += 1
        }
    }
    basic.showNumber(cont_obtuse)
})
basic.forever(function () {
	
})
