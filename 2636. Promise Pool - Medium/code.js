/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
    let add2Pool = () => functions[n++]?.().then(add2Pool);
    return Promise.all(functions.slice(0, n).map(f => f().then(add2Pool)));
};