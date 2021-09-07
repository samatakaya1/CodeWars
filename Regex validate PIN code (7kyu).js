//==============================================================================================================
// Задание:

// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

//Examples:
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//==============================================================================================================
//==============================================================================================================

// Решение:
function validatePIN(pin) {
    let res = null
    if (pin != null && pin != undefined && pin != '' && (pin.length === 4 || pin.length === 6)) {
        let arr = String(pin).split('')
        let count = []
        arr.map(i => {
            if (i != '\n' && i != ' ' && Number(i) >= 0 && Number.isInteger(Number(i))) {
                count.push(i)
            }
            return count
        })
        res = count.length == arr.length ? true : false
    } else {
        res = false
    }
    return res
}
// Другие варианты:
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}
//========
function validatePIN(pin) {
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
    if (isCorrectLength && hasOnlyNumbers) {
        return true;
        return false;
    }
}
//========
function validatePIN(pin) {
    var n = pin.length;
    if (n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
}
//==============================================================================================================
