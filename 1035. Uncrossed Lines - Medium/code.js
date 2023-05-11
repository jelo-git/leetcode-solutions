/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
    let history = new Array(nums1.length)
    for (let n = 0; n < nums1.length; n++) {
        history[n] = new Array(nums2.length)
    }
    let searchForConnection = (n, m) => {
        let ans
        if (n < 0 || m < 0) {
            return 0
        }
        if (history[n][m] != null) {
            return history[n][m]
        }
        if (nums1[n] == nums2[m]) {
            ans = 1 + searchForConnection(n - 1, m - 1)
        } else {
            ans = Math.max(searchForConnection(n, m - 1), searchForConnection(n - 1, m))
        }
        history[n][m] = ans
        return ans
    }
    return searchForConnection(nums1.length - 1, nums2.length - 1)
};