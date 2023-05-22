/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    if (s.length % 2 === 1)
        return false
    for (let n = 0; n < s.length; n++) {
        switch (s[n]) {
            case ')':
                if (stack.pop() !== '(')
                    return false
                break
            case ']':
                if (stack.pop() !== '[')
                    return false
                break
            case '}':
                if (stack.pop() !== '{')
                    return false
                break
            default:
                stack.push(s[n])
                break
        }
    }
    return stack.length === 0
};