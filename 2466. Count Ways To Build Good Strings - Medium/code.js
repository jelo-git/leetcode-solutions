/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
    let memo = new Array(high + 1)
    let mod = Math.pow(10, 9) + 7
    memo[0] = 1
    let construct = (size) => {
        if (size < 0) {
            return 0
        }
        if (memo[size] !== undefined) {
            return memo[size]
        }
        memo[size] = (construct(size - zero) + construct(size - one)) % mod
        return memo[size]
    }
    let count = 0
    for (let n = 1; n <= high; n++) {
        construct(n)
        if (n >= low) {
            count = (count + memo[n]) % mod
        }
    }
    return count
};