//======================================================================================================================
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an
// array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
//======================================================================================================================
const exStr = 'abba';
const exArr = ['aabb', 'abcd', 'bbaa', 'dada'];

function anagrams(word, words) {
    if (word !== "" && words.length) {
        const result = [];
        const arrWord = word.split("");
        words = words.filter(item => item.length === word.length);
        words.forEach(item => {
            let arrItem = item.split("");
            arrWord.filter(i => !arrItem.includes(i)).concat(arrItem.filter(i => !arrWord.includes(i))).length ?
                null :
                result.push(item)
        })
        return result
    }
}

console.log(anagrams(exStr, exArr))
//======================================================================================================================