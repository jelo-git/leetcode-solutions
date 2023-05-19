/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
    let add2Pool = () => functions[n++]?.().then(next);
    return Promise.all(functions.slice(0, n).map(f => f().then(next)));
};
/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */


promisePool([() => new Promise(res => setTimeout(res, 300)), () => new Promise(res => setTimeout(res, 400)), () => new Promise(res => setTimeout(res, 200))], 2)
    .then(console.log) // After 900ms
