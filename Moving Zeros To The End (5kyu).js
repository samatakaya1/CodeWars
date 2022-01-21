//============================================================================================================
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//============================================================================================================
const exArr = [false,1,0,1,2,0,1,3,"a"]

var moveZeros = function (arr) {
    let tempArr = [];
    let result;
    (function getZero(index = arr.indexOf(0)){
        if(index === -1){
            result = arr;
        }else {
            arr.splice(index, 1);
            tempArr.push(0);
            getZero(arr.indexOf(0));
        };
    }());
    return result = result.concat(tempArr);
}

console.log(moveZeros(exArr))
//============================================================================================================