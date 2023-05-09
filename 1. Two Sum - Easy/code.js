/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let dict = {}
    for (n = 0; n < nums.length; n++) {
        if (dict[target - nums[n]] != null)
            return [dict[target - nums[n]], n]
        dict[nums[n]] = n
    }
};