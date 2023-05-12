/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let x = 0, y = 0, direction = 0 // 0=right 1=down 2=left 3=up
    let outcome = new Array(n), upborder = 0, downborder = n, rightborder = n, leftborder = -1, numberOfItems = n * n, currentNumber = 1
    for (let q = 0; q < n; q++) {
        outcome[q] = new Array(n)
    }
    while (true) {
        if (currentNumber > numberOfItems) {
            return outcome
        }
        outcome[y][x] = currentNumber
        currentNumber++
        switch (direction) {
            case 0:
                if (x + 1 == rightborder) {
                    direction = 1
                    rightborder = x
                    y++
                } else {
                    x++
                }
                break;
            case 1:
                if (y + 1 == downborder) {
                    direction = 2
                    downborder = y
                    x--
                } else {
                    y++
                }
                break;
            case 2:
                if (x - 1 == leftborder) {
                    direction = 3
                    leftborder = x
                    y--
                } else {
                    x--
                }
                break;
            case 3:
                if (y - 1 == upborder) {
                    direction = 0
                    upborder = y
                    x++
                } else {
                    y--
                }
                break;
        }
    }
};