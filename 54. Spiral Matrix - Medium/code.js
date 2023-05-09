/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let x = 0, y = 0, direction = 0 // 0=right 1=down 2=left 3=up
    let outcome = [], upborder = 0, downborder = matrix.length, rightborder = matrix[0].length, leftborder = -1, itemsLeft = downborder * rightborder
    while (true) {
        if (itemsLeft <= 0) {
            return outcome
        }
        outcome.push(matrix[y][x])
        itemsLeft--
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