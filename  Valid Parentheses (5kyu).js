//======================================================================================================================
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
//======================================================================================================================
const exStr = "(())((()())())"

function validParentheses(parens){
    var temp = 0;
    for (let i = 0; i < parens.length; i++) {
        parens[i] === ')' ? temp++ : temp--
        if (temp < 0) return false;
    }
    return temp === 0;
}

console.log(validParentheses(exStr))
//======================================================================================================================