/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for (var i = grid.length - 1; i >= 0; i--) {
        for (var j = grid[0].length - 1; j >= 0; j--) {
            if(i === grid.length - 1 && j !== grid[0].length - 1)
                grid[i][j] = grid[i][j] +  grid[i][j + 1];
            else if(j === grid[0].length - 1 && i !== grid.length - 1)
                grid[i][j] = grid[i][j] + grid[i + 1][j];
            else if(j !== grid[0].length - 1 && i !== grid.length - 1)
                grid[i][j] = grid[i][j] + Math.min(grid[i + 1][j],grid[i][j + 1]);
        }
    }
    return grid[0][0];
};