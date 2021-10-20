//==============================================================================================================
// Задание:

// Maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// Примеры:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

//==============================================================================================================
//==============================================================================================================
// Решение:

var maxSequence = function (arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    if (arr.find((r) => r > 0) == undefined || arr.length == 0) {
        maxSum = 0;
    } else {
        arr.forEach((r) => {
            currentSum = Math.max(r, currentSum + r);
            maxSum = Math.max(currentSum, maxSum);
        });
    }

    return maxSum;
};

// Другие варианты:

var maxSequence = function (arr) {
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
    }
    return ans;
}

//========

var maxSequence = function (arr) {
    var currentSum = 0;
    return arr.reduce(function (maxSum, number) {
        currentSum = Math.max(currentSum + number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

//==============================================================================================================
