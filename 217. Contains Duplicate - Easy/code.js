/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let visited = {}
    for (let n = 0; n < nums.length; n++) {
        if (visited[nums[n]] == null) {
            visited[nums[n]] = 1
        } else {
            return true
        }
    }
    return false
};