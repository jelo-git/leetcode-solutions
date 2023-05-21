/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let out = []
    for (let n = 0, counter = 1; n < nums.length; n++) {
        out[n] = counter
        counter *= nums[n]
    }
    for (let n = nums.length - 1, counter = 1; n >= 0; n--) {
        out[n] *= counter
        counter *= nums[n]
    }
    return out
};