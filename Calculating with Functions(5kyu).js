// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
//     There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));



function expression(num, symbol) {
    return symbol(num)
}

function zero(...args) {
    if (args.length) {
        return expression(0, args[0])
    } else {
        return 0
    }
}

function one(...args) {
    if (args.length) {
        return expression(1, args[0])
    } else {
        return 1
    }
}

function two(...args) {
    if (args.length) {
        return expression(2, args[0])
    } else {
        return 2
    }
}

function three(...args) {
    if (args.length) {
        return expression(3, args[0])
    } else {
        return 3
    }
}

function four(...args) {
    if (args.length) {
        return expression(4, args[0])
    } else {
        return 4
    }
}

function five(...args) {
    if (args.length) {
        return expression(5, args[0])
    } else {
        return 5
    }
}

function six(...args) {
    if (args.length) {
        return expression(6, args[0])
    } else {
        return 6
    }
}

function seven(...args) {
    if (args.length) {
        return expression(7, args[0])
    } else {
        return 7
    }
}

function eight(...args) {
    if (args.length) {
        return expression(8, args[0])
    } else {
        return 8
    }
}

function nine(...args) {
    if (args.length) {
        return expression(9, args[0])
    } else {
        return 9
    }
}


function plus(num) {
    return (num2) => {
        return num2 + num
    }
}

function minus(num) {
    return (num2) => {
        return num2 - num
    }
}

function times(num) {
    return (num2) => {
        return num2 * num
    }
}

function dividedBy(num) {
    return (num2) => {
        return Math.floor(+(num2 / num))
    }
}