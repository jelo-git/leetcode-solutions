/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let len = arr.length, newArray = new Array(len)
    while (len--) {
        newArray[len] = fn(arr[len], len)
    }
    return newArray
};