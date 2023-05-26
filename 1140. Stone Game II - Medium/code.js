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
stoneGameII([3111, 4303, 2722, 2183, 6351, 5227, 8964, 7167, 9286, 6626, 2347, 1465, 5201, 7240, 5463, 8523, 8163, 9391, 8616, 5063, 7837, 7050, 1246, 9579, 7744, 6932, 7704, 9841, 6163, 4829, 7324, 6006, 4689, 8781, 621])