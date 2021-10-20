//==============================================================================================================
// Задание:

// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Примеры:

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//==============================================================================================================
//==============================================================================================================
// Решение:
var countBits = function (n) {
    let arr = (n).toString(2).split('');
    let res = arr.reduce((sum, num) => sum + Number(num), 0);
    return res;
}
// Другие варианты:
countBits = n => n.toString(2).split('0').join('').length;
//========
function countBits(n) {
    for (c = 0; n; n >>= 1)c += n & 1
    return c;
}
//========
var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
  };
//==============================================================================================================
