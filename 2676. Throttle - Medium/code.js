/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
    let current, next
    let callFuntion = () => {
        fn(...next)
        next = undefined
        current = setTimeout(() => {
            current = undefined
            if (next !== undefined)
                callFuntion()
        }, t)
    }
    return function (...args) {
        next = args
        if (current === undefined)
            callFuntion()
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */