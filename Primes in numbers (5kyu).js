/*
* Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"*/


function primeFactors(n) {
    const arrObj = {};
    let result = "";

    let i = 2;

    while (n > 1) {
        if (n % i === 0) {
            if (arrObj[i]) {
                arrObj[i]++;
            } else {
                arrObj[i] = 1;
            }
            n = n / i;
            i = 2;
        } else {
            i++;
        }
    }

    for (const key in arrObj) {
        if (arrObj[key] > 1) {
            result += `(${key}**${arrObj[key]})`;
        } else {
            result += `(${key})`;
        }
    }

    return result;
}