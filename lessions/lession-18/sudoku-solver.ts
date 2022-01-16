/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  let row = new Array(9);
  let col = new Array(9);
  let box = new Array(9);
  for (let i = 0; i < 9; i++) {
    row[i] = new Array(10).fill(true);
    col[i] = new Array(10).fill(true);
    box[i] = new Array(10).fill(true);
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      let digit = Number(board[i][j]);
      row[i][digit] = false;
      col[j][digit] = false;
      box[boxIndex(i, j)][digit] = false;
    }
  }

  function boxIndex(i, j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3);
  }

  function dfs() {
    let {
      pos: [x, y],
      availableDigits,
    } = findMinimumProbability();
    if (x === -1) return true;
    for (let digit of availableDigits) {
      board[x][y] = digit + "";
      row[x][digit] = false;
      col[y][digit] = false;
      box[boxIndex(x, y)][digit] = false;
      if (dfs()) return true;
      box[boxIndex(x, y)][digit] = true;
      col[y][digit] = true;
      row[x][digit] = true;
      board[x][y] = ".";
    }
    return false;
  }

  function findMinimumProbability() {
    let minValue = 10;
    let pos = [-1, -1];
    let availableDigits = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== ".") continue;
        let res = getAvailableDigits(i, j);
        if (res.length < minValue) {
          minValue = res.length;
          pos = [i, j];
          availableDigits = res;
        }
      }
    }

    return { pos, availableDigits };
  }

  function getAvailableDigits(i, j) {
    let availableDigits = [];
    for (let digit = 1; digit <= 9; digit++) {
      if (row[i][digit] && col[j][digit] && box[boxIndex(i, j)][digit])
        availableDigits.push(digit);
    }
    return availableDigits;
  }

  dfs();
}
