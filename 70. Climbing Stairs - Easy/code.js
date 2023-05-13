/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let fibo = [0, 1, 2]
    for (let i = 3; i <= n; i++)
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    return fibo[n]
};