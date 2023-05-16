/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = (fn, t) => async (...arc) => Promise.race([fn(...arc), new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))])
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */