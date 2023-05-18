/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    let parentlist = new Array(n)
    for (let i = 0; i < edges.length; i++) {
        parentlist[edges[i][1]] = true
    }
    let out = []
    for (let i = 0; i < n; i++)
        if (parentlist[i] === undefined) out.push(i)
    return out
};