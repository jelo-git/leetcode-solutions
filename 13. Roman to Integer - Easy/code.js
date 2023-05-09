/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let output = 0, prev
    for (let n = s.length - 1; n >= 0; n--) {
        if (romans[prev] > romans[s[n]]) {
            output -= romans[s[n]]
        } else {
            output += romans[s[n]]
        }
        prev = s[n]
    }
    return output
};