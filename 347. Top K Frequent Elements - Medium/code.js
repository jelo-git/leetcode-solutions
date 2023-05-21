/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
    for (let n = 0; n < nums.length; n++) {
        let value = map.get(nums[n])
        if (value === undefined)
            value = 0
        map.set(nums[n], value + 1)
    }
    return [...map].sort((a, b) => a[1] > b[1] ? -1 : 1).splice(0, k).map(a => a[0])
};