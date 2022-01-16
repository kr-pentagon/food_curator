let 온도 = 0
while (true) {
    if (온도 != input.temperature()) {
        if (input.temperature() < -3) {
            basic.showString("")
        } else if (input.temperature() >= -3 && input.temperature() <= 0) {
            basic.showString("Hotteok")
        } else if (input.temperature() <= 10) {
            basic.showString("Kimbap")
        } else if (input.temperature() <= 20) {
            basic.showString("Macdonald")
        } else if (input.temperature() <= 30) {
            basic.showString("Dukbokki")
        } else if (input.temperature() <= 35) {
            basic.showString("icecream")
        } else {
            basic.showString("DO NOT EAT")
        }
        온도 = input.temperature()
    }
}
