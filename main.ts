input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        number += -1
        basic.showNumber(number)
    }
})
let number = 0
number = 9
basic.showNumber(number)
