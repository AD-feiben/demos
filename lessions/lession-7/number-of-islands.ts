/** DFS 解法 */
function numIslands(grid: string[][]): number {
  let ans = 0;
  let m = grid.length;
  let n = grid[0].length;
  let visited = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false);
  }

  function valid(x: number, y: number) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }
  function dfs(x: number, y: number) {
    visited[x][y] = true;
    let dx = [-1, 0, 0, 1];
    let dy = [0, -1, 1, 0];
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (valid(nx, ny) && grid[nx][ny] === "1" && visited[nx][ny] === false) {
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== "1" || visited[i][j]) continue;
      ans += 1;
      dfs(i, j);
    }
  }

  return ans;
}

/** BFS 解法 */
function numIslands(grid: string[][]): number {
  let ans = 0;
  let m = grid.length;
  let n = grid[0].length;
  let visited = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false);
  }

  function valid(x: number, y: number) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  let queue: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== "1" || visited[i][j]) continue;
      ans += 1;
      queue.push([i, j]);
      bfs();
    }
  }

  function bfs() {
    let dx = [-1, 0, 0, 1];
    let dy = [0, -1, 1, 0];
    while (queue.length > 0) {
      let [x, y] = queue.shift();
      visited[x][y] = true;
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          valid(nx, ny) &&
          grid[nx][ny] === "1" &&
          visited[nx][ny] === false
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return ans;
}
