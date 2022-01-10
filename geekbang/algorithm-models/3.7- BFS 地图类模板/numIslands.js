//JavaScript


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    var visit = [];
    for (let i = 0; i < m; i++) {
        visit.push([]);
        for (let j = 0; j < n; j++)
            visit[i][j] = false;
    }
    const dx = [-1, 0, 0, 1];
    const dy = [0, -1, 1, 0];


    var bfs = function(sx, sy) {
        var q = []
        // 第一步：push起点
        q.push([sx, sy]);
        visit[sx][sy] = true;
        while (q.length > 0) {
            var now = q.shift();
            var x = now[0];
            var y = now[1];
            // 扩展所有出边（四个方向）
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                // 任何时候访问数组前，判断合法性
                if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                if (grid[nx][ny] == '1' && !visit[nx][ny]) {
                    q.push([nx, ny]);
                    // BFS：入队时标记visit
                    visit[nx][ny] = true;
                }
            }
        }
    };


    var ans = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (grid[i][j] == '1' && !visit[i][j]) {
                bfs(i, j);
                ans++;
            }
    return ans;
};
