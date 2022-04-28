/*Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.*/

function incrementString(strng) {
    let stringNumbers = strng.replace(/[a-zA-Z]/g, "");
    let stringBody = strng.replace(/[0-9]/g, "");

    if (!stringNumbers) {
        return stringBody + "1";
    }

    if (!stringNumbers.replace(/[0]/g, "")) {
        stringNumbers = stringNumbers.split("");
        stringNumbers = stringNumbers.map((number, index) => {
            if (index === stringNumbers.length - 1) {
                return (number = String(+number + 1));
            }
            return number;
        });
        return stringBody + stringNumbers.join("");
    }

    let it = 0;

    while (it < stringNumbers.length) {
        if (stringNumbers[it] !== "0") {
            let zeros = stringNumbers.slice(0, it);
            const newNumber = String(
                +stringNumbers.slice(it, stringNumbers.length) + 1
            );

            if ((zeros + newNumber).length !== stringNumbers.length) {
                zeros = stringNumbers.slice(1, it);
            }
            return stringBody + zeros + newNumber;
        }
        it++;
    }

    return stringBody + stringNumbers;
}