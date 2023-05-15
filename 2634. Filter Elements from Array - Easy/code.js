/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let newArray = []
    for (let n = 0; n < arr.length; n++)
        fn(arr[n], n) ? newArray.push(arr[n]) : null
    return newArray
};