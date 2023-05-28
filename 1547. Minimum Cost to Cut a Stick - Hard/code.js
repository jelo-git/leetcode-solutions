/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
    cuts.sort((a, b) => a - b)
    let memo = new Map()
    let cut = (left, right) => {
        let key = [left, right].toString()
        if (memo.has(key))
            return memo.get(key)
        let min = Infinity
        for (let i = 0; i < cuts.length; i++) {
            if (cuts[i] <= left || cuts[i] >= right) continue
            min = Math.min(min, right - left + cut(left, cuts[i]) + cut(cuts[i], right))
        }
        if (min === Infinity)
            min = 0
        memo.set(key, min)
        return min
    }
    return cut(0, n)
};