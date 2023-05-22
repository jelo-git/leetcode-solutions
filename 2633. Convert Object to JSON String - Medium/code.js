/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
    let string = ""
    switch (typeof object) {
        case "object":
            if (object === null) {
                string += object
                break
            }
            if (Array.isArray(object)) {
                string += '['
                for (let n = 0; n < object.length; n++) {
                    string += jsonStringify(object[n])
                    if (n < object.length - 1)
                        string += ','
                }
                string += ']'
                break
            }
            let keys = Object.keys(object)
            string += '{'
            for (let n = 0; n < keys.length; n++) {
                string += jsonStringify(keys[n]) + ':'
                string += jsonStringify(object[keys[n]])
                if (n < keys.length - 1)
                    string += ','
            }
            string += '}'
            break
        case "boolean":
        case "number":
            string += object
            break;
        default:
            string += '"' + object + '"'
            break;
    }
    return string
};