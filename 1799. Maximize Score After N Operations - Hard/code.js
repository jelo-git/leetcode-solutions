/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
    let gcd = (x, y) => {
        if (x === 0)
            return y
        return gcd(y % x, x)
    }
    let memo = new Map()
    let visit = (bitmap, i) => {
        if (memo.has(bitmap))
            return memo.get(bitmap)
        let max = 0
        for (let n = 0; n < nums.length - 1; n++) {
            if ((bitmap >> n) & 1) continue
            for (let m = n + 1; m < nums.length; m++) {
                if ((bitmap >> m) & 1) continue
                let currgcd = gcd(nums[n], nums[m])
                let out = visit(bitmap | 1 << n | 1 << m, i + 1)
                let score = currgcd * i + out
                max = Math.max(score, max)
            }
        }
        memo.set(bitmap, max)
        return max
    }
    return visit(0, 1)
};