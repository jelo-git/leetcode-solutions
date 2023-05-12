/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let groups = new Map()
    let len = strs.length
    while (len--) {
        let key = strs[len].split('').sort().join()
        let val = groups.get(key) === undefined ? [] : groups.get(key)
        val.push(strs[len])
        groups.set(key, val)
    }
    return Array.from(groups.values())
};