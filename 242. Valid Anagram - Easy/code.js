/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length)
        return false
    let letters = new Array(26).fill(0)
    for (let n = 0; n < s.length; n++) {
        letters[s.charCodeAt(n) - 97]++
        letters[t.charCodeAt(n) - 97]--
    }
    for (let n = 0; n < 26; n++)
        if (letters[n] !== 0)
            return false
    return true
};