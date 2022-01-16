function recomendFood (num: number) {
    if (num < -3) {
        basic.showString("")
    } else if (num >= -3 && num <= 0) {
        basic.showString("Hotteok")
    } else if (num <= 10) {
        basic.showString("Kimbap")
    } else if (num <= 20) {
        basic.showString("Macdonald")
    } else if (num <= 30) {
        basic.showString("Dukbokki")
    } else if (num <= 35) {
        basic.showString("icecream")
    } else {
        basic.showString("DO NOT EAT")
    }
}
let 온도 = 0
while (true) {
    if (온도 != input.temperature()) {
        recomendFood(input.temperature())
    }
    온도 = input.temperature()
}
