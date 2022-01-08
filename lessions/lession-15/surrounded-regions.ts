/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  let m = board.length;
  let n = board[0].length;
  let fa = new Array(m * n + 1).fill(0);
  for (let i = 0; i <= m * n; i++) fa[i] = i;
  let outside = m * n;

  let dx = [-1, 0, 0, 1];
  let dy = [0, -1, 1, 0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "X") continue;
      for (let k = 0; k < 4; k++) {
        let ni = i + dx[k];
        let nj = j + dy[k];
        if (ni < 0 || nj < 0 || ni >= m || nj >= n) {
          unionSet(num(i, j), outside);
        } else {
          if (board[ni][nj] === "O") {
            unionSet(num(i, j), num(ni, nj));
          }
        }
      }
    }
  }
  outside = find(outside);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O" && find(num(i, j)) !== outside) {
        board[i][j] = "X";
      }
    }
  }

  function find(x) {
    if (fa[x] === x) return x;
    return (fa[x] = find(fa[x]));
  }
  function unionSet(x, y) {
    (x = find(x)), (y = find(y));
    if (x !== y) fa[x] = y;
  }
  function num(i, j) {
    return i * n + j;
  }
}
