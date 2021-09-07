//==============================================================================================================
// Задание:

//Decode the Morse code

// In this kata you have to write a simple Morse code decoder.While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes".For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−.The Morse code is case -insensitive, traditionally capital letters are used.When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words.For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS(that was first issued by Titanic), that is coded as ···−−−···.These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human - readable string.

// Примеры:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

//==============================================================================================================

//==============================================================================================================
// Решение:decodeMorse = function (morseCode) {
decodeMorse = function (morseCode) {
    const morseAlphabet = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '−−−': 'O',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '···': 'S',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
        'W': ' ',
        '...---...': 'SOS',
        '···−−−···': 'SOS',
        '-.-.--': '!',
        '.-.-.-': '.'
    };
    let data = []
    let str = ''
    let res = ''
    morseCode = morseCode.trim()
    morseCode = morseCode.replace(/\s\s\s/g, ' W ')
    console.log(morseCode);
    morseCode = morseCode.split(' ')
    morseCode.forEach(i => {
        str = i
        str = str.split(' ')
        data = data.concat(str)
    })
    data.map(i => {
        Object.keys(morseAlphabet).forEach(r => {
            if (r == i) {
                res += morseAlphabet[r]
            }
        })
    })
    return res.toUpperCase()
}

// Другие варианты:
decodeMorse = function (morseCode) {
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord(word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
//========
decodeMorse = function (morseCode) {
    return morseCode
        .trim()
        .split(/  | /)
        .map((code) => MORSE_CODE[code] || ' ')
        .join('');
}
//========
decodeMorse = function (morseCode) {
    let result = ""
    let tmp = morseCode.trim()
    tmp += " "
    let stk = ""
    for (let i = 0; i < tmp.length; i++) {
        let s = tmp[i]
        stk += s
        switch (stk) {
            case "...---... ":
                result += "SOS"
                stk = ""
                break
            case "  ":
                result += " "
                stk = ""
                break;
            case ". ":
                result += "E"
                stk = ""
                break;
            case "- ":
                result += "T"
                stk = ""
                break;
            case ".. ":
                result += "I"
                stk = ""
                break;
            case "... ":
                result += "S"
                stk = ""
                break;
            case ".... ":
                result += "H"
                stk = ""
                break;
            case "...- ":
                result += "V"
                stk = ""
                break;
            case "..- ":
                result += "U"
                stk = ""
                break;
            case "..-. ":
                result += "F"
                stk = ""
                break;
            case ".- ":
                result += "A"
                stk = ""
                break;
            case ".-. ":
                result += "R"
                stk = ""
                break;
            case ".-.. ":
                result += "L"
                stk = ""
                break;
            case ".-- ":
                result += "W"
                stk = ""
                break;
            case ".--. ":
                result += "P"
                stk = ""
                break;
            case ".--- ":
                result += "J"
                stk = ""
                break;
            case "-. ":
                result += "N"
                stk = ""
                break;
            case "-.. ":
                result += "D"
                stk = ""
                break;
            case "-... ":
                result += "B"
                stk = ""
                break;
            case "-..- ":
                result += "X"
                stk = ""
                break;
            case "-.- ":
                result += "K"
                stk = ""
                break;
            case "-.-. ":
                result += "C"
                stk = ""
                break;
            case "-.-- ":
                result += "Y"
                stk = ""
                break;
            case "-- ":
                result += "M"
                stk = ""
                break;
            case "--. ":
                result += "G"
                stk = ""
                break;
            case "--.. ":
                result += "Z"
                stk = ""
                break;
            case "--.- ":
                result += "Q"
                stk = ""
                break;
            case "-.-.-- ":
                result += "!"
                stk = ""
                break;
            case ".-.-.- ":
                result += "."
                stk = ""
                break;
            case "--- ":
                result += "O"
                stk = ""
                break;

        }
    }
    return result
}

//==============================================================================================================
