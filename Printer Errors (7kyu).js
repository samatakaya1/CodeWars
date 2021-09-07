//==============================================================================================================
// Задание:

//Printer Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Примеры:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

//==============================================================================================================

//==============================================================================================================
// Решение:
function printerError(s) {
    const successfullyIt = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    let errorsCount = '';
    let errors = 0;
    let arr = String(s).split('')
    let iterationsPrint = arr.length;
    arr.map(i => {
        let strIt = i
        let count = 0
        successfullyIt.map(r => {
            if (strIt == r) {
                return count += 1
            }
        })
        errors += count >= 1 ? 0 : 1
    })
    return errorsCount = `${errors}/${iterationsPrint}`
}
// Другие варианты:
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}
//========
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}
//========
function printerError(s) {
    var x = 0; 
    var y = 0; 
    for (var i = 0; i < s.length; i++) {
      if (s.charAt(i).includes("n")){
        x++;
        y++;
      } else if (s.charAt(i).includes("o")){
        x++;
        y++;
      } else if (s.charAt(i).includes("p")){
        x++;
        y++;
      } else if (s.charAt(i).includes("q")){
        x++;
        y++;
      } else if (s.charAt(i).includes("r")){
        x++;
        y++;
      } else if (s.charAt(i).includes("s")){
        x++;
        y++;
      } else if (s.charAt(i).includes("t")){
        x++;
        y++;
      } else if (s.charAt(i).includes("u")){
        x++;
        y++;
      } else if (s.charAt(i).includes("v")){
        x++;
        y++;
      } else if (s.charAt(i).includes("w")){
        x++;
        y++;
      } else if (s.charAt(i).includes("x")){
        x++;
        y++;
      } else if (s.charAt(i).includes("y")){
        x++;
        y++;
      } else if (s.charAt(i).includes("z")){
        x++;
        y++;
      } else {
        y++;
      }
    } 
    var xString = x.toString();
    var yString = y.toString();
    var fraction = "/";
   return xString + fraction + yString;
 }
//==============================================================================================================
