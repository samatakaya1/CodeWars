//==============================================================================================================
// Задание:

//Find the divisors!

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) 
//(use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Примеры:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

//==============================================================================================================

//==============================================================================================================
// Решение:
function divisors(integer) {
    let res = []
    for (let i = 2; i <= (integer - 1); i++) Number.isInteger(integer / i) ? res.push(i) : i
    return res.length > 0 ? res : `${integer} is prime`
};
// Другие варианты:
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};
//========
function divisors(integer) {
    var divs = [];
    for (var i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divs.push(i);
        }
    }
    return divs.length ? divs : integer + ' is prime';
};
//========
function divisors(int) {
    const arr = Array.from({ length: int - 1 }, (_, i) => i + 1).slice(1).filter(el => int % el === 0)
    return arr.length ? arr : `${int} is prime`;
};
//==============================================================================================================
