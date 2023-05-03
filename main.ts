let variable4 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable4 = 4
    basic.showNumber(variable4)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable4)
})
