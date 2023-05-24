/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
    for (let n = 0; n < nums1.length; n++) {
        nums1[n] = [nums1[n] * nums2[n] * nums2[n], n]
    }
    nums1.sort((a, b) => a[0] > b[0] ? -1 : 1)
    let sum = 0, min = Infinity
    for (let n = 0; n < k; n++) {
        sum += nums1[n][0] / (nums2[nums1[n][1]] * nums2[nums1[n][1]])
        min = Math.min(min, nums2[nums1[n][1]])
    }
    if (min === 0)
        return 0
    return sum * min
};
maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)