/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let lengthOfPrefix = 0
    for (let n = 0; n < strs[0].length; n++) {
        let check = true
        for (let m = 1; m < strs.length; m++) {
            if (strs[0][n] != strs[m][n]) {
                check = false
                return strs[0].slice(0, lengthOfPrefix)
            }
        }
        if (check) lengthOfPrefix++
    }
    return strs[0]
};