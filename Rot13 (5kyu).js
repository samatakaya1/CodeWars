/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
* */

function rot13(message) {
    const arren = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    message = message.split("")
    message = message.map(item => {
        if (arren.includes(item.toLowerCase())) {
            const position = arren.indexOf(item.toLowerCase());
            const newPosition = (position + 13) > arren.length ? (
                (arren.length - position) - 13
            ) : position === 13 ? 0 : position + 13;
            const newSymbol = item.toUpperCase() === item ? arren[Math.abs(newPosition)].toUpperCase() : arren[Math.abs(newPosition)];
            return newSymbol
        } else {
            return item
        }
    })
    return message.join("")
}