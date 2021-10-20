//==============================================================================================================
// Задание:

// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// Примеры:

// Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
// Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
// Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
// Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
//==============================================================================================================
//==============================================================================================================
// Решение:

function arrayDiff(a, b) {
    let res = []
    if (a.length == 0) {
        res = []
    } else if (b.length == 0) {
        res = a
    } else {
        a.filter(r => {
            if (!b.includes(r)) {
                res.push(r)
            }
        })
    }
    return res
}
// Другие варианты:
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}
//========
function array_diff(a, b) {
    return a.filter(function (x) { return b.indexOf(x) == -1; });
}
//========
function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}
//==============================================================================================================
