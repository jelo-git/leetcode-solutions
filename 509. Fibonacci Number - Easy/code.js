/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0)
        return 0
    let tmp1 = 0, tmp2 = 1, i = 2
    while (i++ < n) {
        if (i % 2 != 0)
            tmp1 += tmp2
        else
            tmp2 += tmp1
    }
    return tmp1 + tmp2
};