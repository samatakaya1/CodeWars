//==============================================================================================================
// Задание:

// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Примеры:
//==============================================================================================================
//==============================================================================================================
// Решение:
function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = alphabet.split('')
    let temp = []
    for (let i of string.toLowerCase()) {
        alphabetArr.filter(f => {
            if (f == i) {
                temp.push(i)
            }
        })
    }
    let res = temp.filter((it, index) => index === temp.indexOf(it = it.trim()));

    return res.length == 26 ? true : false
}
// Другие варианты:
function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
        return string.indexOf(x) !== -1;
    });
}
//========
function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}
//========
function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
//==============================================================================================================
