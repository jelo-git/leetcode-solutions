/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (o1 === o2)
        return true
    if (o1 === null || o2 === null || typeof o1 !== "object" || typeof o2 !== "object")
        return false
    let obj1 = Array.isArray(o1), obj2 = Array.isArray(o2)
    if (obj1 !== obj2)
        return false
    if (obj1 && obj2) {
        if (o1.length !== o2.length)
            return false
        for (let n = 0; n < o1.length; n++)
            if (!areDeeplyEqual(o1[n], o2[n]))
                return false
        return true
    }
    obj1 = Object.keys(o1)
    obj2 = Object.keys(o2)
    if (obj1.length !== obj2.length)
        return false
    for (let n = 0; n < obj1.length; n++)
        if (!areDeeplyEqual(o1[obj1[n]], o2[obj1[n]]))
            return false
    return true
};