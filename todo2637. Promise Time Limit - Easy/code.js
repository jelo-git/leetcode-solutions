/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async (...args) => {
        return new Promise(resolve => {
            setInterval(() => { reject("Time Limit Exceeded") }, t)
            fn(...args).catch((err) => reject("Time Limit Exceeded")).then(resolve)
        }, reject => { })
    }
};

const limited = timeLimit(async () => { throw new Error }, 1000);
// console.log(limited(1000).catch(console.log))
limited(100).catch(console.log) // "Time Limit Exceeded" at t=100ms
