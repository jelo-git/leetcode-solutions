/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
    let findFirstIsland = () => {
        for (let y = 0; y < grid.length; y++)
            for (let x = 0; x < grid.length; x++)
                if (grid[y][x] === 1)
                    return [y, x]
    }
    let shore = []
    let fillLand = (y, x) => {
        if (grid[y][x] === 0) {
            shore.push([y, x])
            grid[y][x] = -1
        }
        if (grid[y][x] !== 1)
            return
        grid[y][x] = 2
        if (x - 1 >= 0)
            fillLand(y, x - 1)
        if (x + 1 < grid.length)
            fillLand(y, x + 1)
        if (y - 1 >= 0)
            fillLand(y - 1, x)
        if (y + 1 < grid.length)
            fillLand(y + 1, x)
    }
    fillLand(...findFirstIsland())
    let sailTheSevenSeas = (value) => {
        let len = shore.length
        for (let n = 0; n < len; n++) {
            let y = shore[n][0], x = shore[n][1]
            if (x - 1 >= 0) {
                if (grid[y][x - 1] === 1)
                    return value + 1
                if (grid[y][x - 1] === 0) {
                    grid[y][x - 1] = value
                    shore.push([y, x - 1])
                }
            }
            if (x + 1 < grid.length) {
                if (grid[y][x + 1] === 1)
                    return value + 1
                if (grid[y][x + 1] === 0) {
                    grid[y][x + 1] = value
                    shore.push([y, x + 1])
                }
            }
            if (y - 1 >= 0) {
                if (grid[y - 1][x] === 1)
                    return value + 1
                if (grid[y - 1][x] === 0) {
                    grid[y - 1][x] = value
                    shore.push([y - 1, x])
                }
            }
            if (y + 1 < grid.length) {
                if (grid[y + 1][x] === 1)
                    return value + 1
                if (grid[y + 1][x] === 0) {
                    grid[y + 1][x] = value
                    shore.push([y + 1, x])
                }
            }
        }
        shore.splice(0, len)
        return 0
    }
    let val = -2, out = 0
    while (true) {
        out = sailTheSevenSeas(val)
        if (out !== 0)
            return -out
        val--
    }
};