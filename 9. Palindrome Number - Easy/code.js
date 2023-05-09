/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    let tmp = x, numberOfDigits = 0
    while (tmp != 0) {
        tmp = Math.floor(tmp / 10)
        numberOfDigits++
    }
    for (n = 1; n <= Math.floor(numberOfDigits / 2); n++) {
        if (Math.floor((x % Math.pow(10, numberOfDigits - n + 1)) / Math.pow(10, numberOfDigits - n)) != Math.floor((x % Math.pow(10, n)) / Math.pow(10, n - 1))) return false
    }
    return true
};