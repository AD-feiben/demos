/** 解法一 */
function longestIncreasingPath(matrix: number[][]): number {
  let m = matrix.length;
  let n = matrix[0].length;

  let to: Array<Array<number>> = new Array(m * n);
  for (let i = 0; i < m * n; i++) to[i] = [];
  let deg: Array<number> = new Array(m * n).fill(0);
  let dist: Array<number> = new Array(m * n).fill(0);

  function getNum(i: number, j: number) {
    return i * n + j;
  }

  function valid(i: number, j: number) {
    return i >= 0 && i < m && j >= 0 && j < n;
  }

  function addEdge(u: number, v: number) {
    deg[v]++;
    to[u].push(v);
  }

  let dx = [-1, 0, 0, 1];
  let dy = [0, -1, 1, 0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < 4; k++) {
        let ni = i + dx[k];
        let nj = j + dy[k];

        if (valid(ni, nj) && matrix[ni][nj] > matrix[i][j]) {
          addEdge(getNum(i, j), getNum(ni, nj));
        }
      }
    }
  }

  let q = [];
  for (let i = 0; i < m * n; i++) {
    if (deg[i] === 0) {
      q.push(i);
      dist[i] = 1;
    }
  }

  while (q.length > 0) {
    let x = q.shift();
    for (let y of to[x]) {
      deg[y]--;
      dist[y] = Math.max(dist[y], dist[x] + 1);
      if (deg[y] === 0) q.push(y);
    }
  }

  let ans = 0;
  for (let i = 0; i < m * n; i++) ans = Math.max(ans, dist[i]);
  return ans;
}

/** 解法二 */
function longestIncreasingPath(matrix: number[][]): number {
  let m = matrix.length;
  let n = matrix[0].length;
  let dist = new Array(m);
  for (let i = 0; i < m; i++) {
    dist[i] = new Array(n).fill(0);
  }

  function valid(x: number, y: number) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  let dx = [-1, 0, 0, 1];
  let dy = [0, -1, 1, 0];

  function dfs(x, y) {
    if (dist[x][y]) return dist[x][y];
    dist[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (valid(nx, ny) && matrix[nx][ny] > matrix[x][y]) {
        dist[x][y] = Math.max(dist[x][y], dfs(nx, ny) + 1);
      }
    }
    return dist[x][y];
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }

  return ans;
}
