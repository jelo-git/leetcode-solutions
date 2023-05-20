/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let graph = {
        storage: new Map(),
        get: function (a, b) { return this.storage.has(a) ? this.storage.get(a).get(b) : undefined },
        getKeys: function (a) { return this.storage.has(a) ? this.storage.get(a).keys() : undefined },
        has: function (a) { return this.storage.has(a) },
        set: function (a, b, value) {
            let tmp = this.storage.get(a)
            if (tmp === undefined)
                tmp = new Map()
            tmp.set(b, value)
            this.storage.set(a, tmp)
            tmp = this.storage.get(b)
            if (tmp === undefined)
                tmp = new Map()
            tmp.set(a, 1 / value)
            this.storage.set(b, tmp)
        }
    }
    for (let n = 0; n < equations.length; n++) {
        graph.set(equations[n][0], equations[n][1], values[n])
    }
    let findConnection = (from, to, visited) => {
        if (!graph.has(from) || visited.has(from))
            return -1.0
        if (from === to)
            return 1.0
        visited.set(from)
        let check = graph.get(from, to)
        if (check !== undefined)
            return check
        for (let key of graph.getKeys(from)) {
            check = findConnection(key, to, visited)
            if (check !== -1.0)
                return check * graph.get(from, key)
        }
        return -1.0
    }
    for (let n = 0; n < queries.length; n++) {
        let visited = new Map()
        queries[n] = findConnection(queries[n][0], queries[n][1], visited)
    }
    return queries
};