/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
    let memo = new Array(stoneValue.length).fill(-Infinity)
    let play = (index) => {
        if (index >= stoneValue.length) return 0
        if (memo[index] !== -Infinity) return memo[index]
        for (let n = 0, rocks = 0; n < 3 && index + n < stoneValue.length; n++) {
            rocks += stoneValue[index + n]
            memo[index] = Math.max(memo[index], rocks - play(index + n + 1))
        }
        return memo[index]
    }
    let outcome = play(0, true)
    return outcome === 0 ? "Tie" : outcome > 0 ? "Alice" : "Bob"
};