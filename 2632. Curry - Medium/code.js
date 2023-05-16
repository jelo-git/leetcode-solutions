/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
    let spices = []
    let expected = fn.length
    let boil = (...recipeSteps) => {
        expected -= recipeSteps.length
        spices.push(...recipeSteps)
        if (expected > 0)
            return boil
        return fn(...spices)
    }
    return boil
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */