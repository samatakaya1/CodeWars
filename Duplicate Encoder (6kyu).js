//=================================================================
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears
// only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining
// if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
//=================================================================

const exStr = "recede"

function duplicateEncode(word){
    word = word.toLowerCase().split("");
    return word.map( letter => {
        let tempArr = word.filter( f => f === letter);
        if(tempArr.length == 1){
            return letter = "(";
        }else{
            return letter = ")";
        };
    }).join("");
}

console.log(duplicateEncode(exStr))

//=================================================================