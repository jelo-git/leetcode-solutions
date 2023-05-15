/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (nums.length === 0)
        return init
    let val = fn(init, nums[0])
    for (let n = 1; n < nums.length; n++) {
        val = fn(val, nums[n])
    }
    return val
};