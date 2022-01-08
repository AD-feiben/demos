function numIslands(grid: string[][]): number {
  let m = grid.length;
  let n = grid[0].length;
  let fa = new Array(m * n + 1);
  for (let i = 0; i <= m * n; i++) fa[i] = i;
  let outside = m * n;

  function find(x) {
    if (fa[x] === x) return x;
    return (fa[x] = find(fa[x]));
  }

  function unionset(x, y) {
    (x = find(x)), (y = find(y));
    if (x !== y) fa[x] = y;
  }

  function num(x, y) {
    return x * n + y;
  }

  let dx = [-1, 0, 0, 1];
  let dy = [0, -1, 1, 0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "0") {
        unionset(num(i, j), outside);
      }
      for (let k = 0; k < 4; k++) {
        let ni = i + dx[k];
        let nj = j + dy[k];
        if (ni < 0 || nj < 0 || ni >= m || nj >= n) continue;
        if (grid[i][j] === grid[ni][nj]) {
          unionset(num(i, j), num(ni, nj));
        }
      }
    }
  }

  let ans = 0;
  outside = find(outside);
  for (let i = 0; i < m * n; i++) {
    if (i === find(i) && i !== outside) ans++;
  }
  return ans;
}
