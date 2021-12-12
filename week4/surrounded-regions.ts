/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  let m = board.length;
  let n = board[0].length;
  let visited = new Array(m);
  let areaO = new Set();

  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false);
  }

  /** 根据 x, y 判断是否处于 board 边缘 */
  function isSide(x: number, y: number) {
    return x === 0 || x === m - 1 || y === 0 || y === n - 1;
  }

  /** 判断 x, y 是否合法  */
  function valid(x: number, y: number) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  function getKey(x: number, y: number) {
    return x * n + y;
  }

  function bfs(m, n) {
    visited[m][n] = true;
    let dx = [-1, 0, 0, 1];
    let dy = [0, -1, 1, 0];
    let queue = [[m, n]];
    while (queue.length > 0) {
      let [x, y] = queue.shift();
      areaO.add(getKey(x, y));
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          valid(nx, ny) &&
          board[nx][ny] === "O" &&
          visited[nx][ny] === false
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      /** 从边缘的 O 扩展 */
      if (board[i][j] === "O" && visited[i][j] === false && isSide(i, j)) {
        bfs(i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (areaO.has(getKey(i, j)) === false) {
        board[i][j] = "X";
      }
    }
  }
}
