/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
    let score = 0
    for (let n = 0; n < nums.length; n++)
        nums[n].sort((a, b) => {
            return a < b ? -1 : 1
        })
    while (nums.length > 0) {
        let max = -1
        for (let n = 0; n < nums.length; n++) {
            let tmp = nums[n].pop()
            if (tmp === undefined) {
                return score
            }
            else {
                if (max < tmp)
                    max = tmp
            }
        }
        score += max
    }
    return score
};