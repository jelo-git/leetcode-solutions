/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let waiting
    return function (...args) {
        if (waiting !== undefined)
            clearTimeout(waiting)
        waiting = setTimeout(() => {
            fn(...args)
            waiting = undefined
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */