/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    let memory = new Array(questions.length)
    let exam = (task) => {
        if (task >= questions.length) {
            return 0
        }
        if (memory[task] == null) {
            memory[task] = Math.max(questions[task][0] + exam(task + questions[task][1] + 1), exam(task + 1))
        }
        return memory[task]
    }
    return exam(0)
};