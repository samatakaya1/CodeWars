//==============================================================================================================
// Задание:

// Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// Примеры:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

//==============================================================================================================
//==============================================================================================================
// Решение:
function createPhoneNumber(numbers) {
    let strNumber = '(nnn) nnn-nnnn'
    for (let i of numbers) {
        strNumber = strNumber.replace(/n/, i)
    }
    return strNumber
}
// Другие варианты:
function createPhoneNumber(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') '
        + numbers.substring(3, 6)
        + '-'
        + numbers.substring(6);
}
//========
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}
//========
function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
//========
createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

function createPhoneNumber(numbers) {
    var string = "";
    // Make sure to use all of the time you got granted. Never waste time which is entitled to you!!!!
    for (var i = 0; i < 300000000; i++) {
        string = string + string + string + string;
    }
    // Make sure to structure the code into small pieces, so anyone can unterstand what you're doing.
    // Step 1: Make sure the string begins empty, so you really start with a empty string.
    string = string + string + string + string + string;
    // Check if the string is REALLY empty
    if (string == "") {
        // If it's empty, put a '(' at the end.
        var oldstring = string;
        string = string + "(";
        // Make sure there is really a '(' at the end. If not, repeat!
        if (string == oldstring + "(") {
            // If everything is fine, add the first number.
            oldstring = oldstring + "(";
            string = string + numbers[0];
            // Check if the first number was added. If not, repeat!
            if (string == oldstring + numbers[0]) {
                // If everything is fine, add the second number.
                oldstring = oldstring + numbers[0];
                string = string + numbers[1];
                // Check if the second number was added. If not, repeat!
                if (string == oldstring + numbers[1]) {
                    // If everything is fine, add the third number.
                    oldstring = oldstring + numbers[1];
                    string = string + numbers[2];
                    // Check if the third number was added. If not, repeat!
                    if (string == oldstring + numbers[2]) {
                        // If everything is fine, add the ')'.
                        oldstring = oldstring + numbers[2];
                        string = string + ")";
                        // Check if the ')' was added. If not, repeat!
                        if (string == oldstring + ")") {
                            // If everything is fine, add the ' '.
                            oldstring = oldstring + ")";
                            string = string + " ";
                            // Check if the ' ' was added. If not, repeat!
                            if (string == oldstring + " ") {
                                // If everything is fine, add the fourth number.
                                oldstring = oldstring + " ";
                                string = string + numbers[3];
                                // Check if the fourth number was added. If not, repeat!
                                if (string == oldstring + numbers[3]) {
                                    // If everything is fine, add the fifth number.
                                    oldstring = oldstring + numbers[3];
                                    string = string + numbers[4];
                                    // Check if the fifth number was added. If not, repeat!
                                    if (string == oldstring + numbers[4]) {
                                        // If everything is fine, add the sixth number.
                                        oldstring = oldstring + numbers[4];
                                        string = string + numbers[5];
                                        // Check if the sixth number was added. If not, repeat!
                                        if (string == oldstring + numbers[5]) {
                                            // If everything is fine, add the "-".
                                            oldstring = oldstring + numbers[5];
                                            string = string + "-";
                                            // Check if the "-" was added. If not, repeat!
                                            if (string == oldstring + "-") {
                                                // If everything is fine, add the seventh number.
                                                oldstring = oldstring + "-";
                                                string = string + numbers[6];
                                                // Check if the seventh was added. If not, repeat!
                                                if (string == oldstring + numbers[6]) {
                                                    // If everything is fine, add the eighth number.
                                                    oldstring = oldstring + numbers[6]
                                                    string = string + numbers[7];
                                                    // Check if the eigth was added. If not, repeat!
                                                    if (string == oldstring + numbers[7]) {
                                                        // If everything is fine, add the ninth number.
                                                        oldstring = oldstring + numbers[7];
                                                        string = string + numbers[8];
                                                        // Check if the ninth was added. If not, repeat!
                                                        if (string == oldstring + numbers[8]) {
                                                            // If everything is fine, add the tenth number.
                                                            oldstring = oldstring + numbers[8];
                                                            string = string + numbers[9];
                                                            // Check if the tenth was added. If not, repeat!
                                                            if (string == oldstring + numbers[9]) {
                                                                // If everything is fine, return the string!
                                                                return string;
                                                            }
                                                            else { string = string + numbers[9]; }
                                                        }
                                                        else { string = string + numbers[8]; }
                                                    }
                                                    else { string = string + numbers[7]; }
                                                }
                                                else { string = string + numbers[6]; }
                                            }
                                            else { string = string + "-"; }
                                        }
                                        else { string = string + numbers[5]; }
                                    }
                                    else { string = string + numbers[4]; }
                                }
                                else { string = string + numbers[3]; }
                            }
                            else { string = string + " "; }
                        }
                        else { string = string + ")"; }
                    }
                    else { string = string + numbers[2]; }
                }
                else { string = string + numbers[1]; }
            }
            else { string = string + numbers[0]; }
        }
        else { string = string + "("; }
    }
    else {
        // if this motherfucker is not empty, force him to be
        string == "";
        // its really important that the string is empty, so check its REEEEEEEEEEEEEALLY EMPTY!!!!!!!!!!!
        for (var i = 0; i < 700000000; i++) {
            string = string + string + string + string;
        }
    }
}
//==============================================================================================================
