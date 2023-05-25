/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
    if (k === 0 || n >= maxPts + k) return 1.0
    let vec = new Array(n + 1)
    vec[0] = 1.0
    let sum = 1.0, out = 0.0
    for (let i = 1; i <= n; i++) {
        vec[i] = sum / maxPts
        if (i < k) sum += vec[i]
        else out += vec[i]
        if (i - maxPts >= 0) sum -= vec[i - maxPts]
    }
    return out
};