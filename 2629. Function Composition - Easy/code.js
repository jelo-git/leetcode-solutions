/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    let evalFun = (x) => {
        let fn = functions.pop()
        if (fn === undefined)
            return x
        return evalFun(fn(x))
    }
    return (x) => evalFun(x)
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */