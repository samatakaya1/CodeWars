//==============================================================================================================
//Задание:

//Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer
//==============================================================================================================

//Решение: 
//==============================================================================================================
function squareDigits(num) {
    let numStr = String(num)
    let res = []
    for (let i = 0; i < numStr.length; i++) {
        res.push(Math.pow(Number(numStr[i]), 2))
    }
    return Number(res.join(''));
}
//Другие варианты:
function squareDigits(num) {
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));

}
//========
function squareDigits(num) {
    var array = num.toString().split('').map(function (int) {
        var i = parseInt(int);
        return i * i;
    });

    return parseInt(array.join(""));
}
//========
function squareDigits(num) {
    return +num.toString().split('').map(i => i * i).join('');
}
//==============================================================================================================
