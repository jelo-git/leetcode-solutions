/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let visited = new Array(graph.length).fill(0)
    let canVisit = (n, color) => {
        if (visited[n] !== 0)
            return visited[n] == color
        visited[n] = color
        for (let i = 0; i < graph[n].length; i++)
            if (!canVisit(graph[n][i], -color))
                return false
        return true
    }
    for (let n = 0; n < graph.length; n++)
        if (visited[n] === 0 && !canVisit(n, 1))
            return false
    return true
};
let arr = [[1, 3], [0, 2], [1, 3], [0, 2]]
console.log(isBipartite(arr))