//========================================================================================================
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
//========================================================================================================
const exStr = 'Hello world !'

function pigIt(str){
    str = str.split(" ")
    return str.map( item => {
        if(/[A-Za-z]/i.test(item)){
            item = item.split("");
            item.push(item[0]);
            item.shift();
            item.push("ay");
            item = item.join("");
        };
        return item;
    }).join(" ");
}

console.log(pigIt(exStr) === "elloHay orldway !")
//========================================================================================================