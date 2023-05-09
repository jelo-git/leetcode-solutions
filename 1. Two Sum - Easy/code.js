/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (n = 0; n < nums.length - 1; n++) {
        for (m = n + 1; m < nums.length; m++) {
            if (nums[n] + nums[m] == target) {
                return [n, m]
            }
        }
    }
};
var twoSumSmol = function (nums, target) {
    let dict = {}
    for (n = 0; n < nums.length; n++) {
        if (dict[target - nums[n]] != null)
            return [dict[target - nums[n]], n]
        dict[nums[n]] = n
    }
};
console.log(twoSum([3, 3], 6))
console.log(twoSumSmol([3, 3], 6))