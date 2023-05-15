/**
 * @param {Function} fn
 */
function memoize(fn) {
    let memo = new Map()
    return (...args) => {
        let key = JSON.stringify(args)
        if (!memo.has(key))
            memo.set(key, fn(...args))
        return memo.get(key)
    }
}