/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    let sums = new Array(piles.length)
    sums[piles.length - 1] = piles[piles.length - 1]
    for (let n = piles.length - 2; n >= 0; n--)
        sums[n] = sums[n + 1] + piles[n]
    let memo = new Map()
    let play = (index, m) => {
        if (piles.length - index <= 2 * m) return sums[index]
        let key = [index, m].toString()
        if (memo.has(key)) return memo.get(key)
        let max = 0
        for (let n = 1; n <= 2 * m; n++)
            max = Math.max(max, sums[index] - play(index + n, Math.max(n, m)))
        memo.set(key, max)
        return max
    }
    return play(0, 1)
};