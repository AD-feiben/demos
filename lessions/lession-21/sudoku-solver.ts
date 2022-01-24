/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  let row = new Array(9);
  let col = new Array(9);
  let box = new Array(9);

  for (let i = 0; i < 9; i++) {
    // 二进制数 0b1111111110  (0浪费掉)
    //  Index    9876543210
    row[i] = col[i] = box[i] = ((1 << 9) - 1) << 1; // 0b1111111110
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      let digit = Number(board[i][j]);
      if ((row[i] >>> digit) & 1) row[i] ^= 1 << digit;
      if ((col[j] >>> digit) & 1) col[j] ^= 1 << digit;
      let k = boxIndex(i, j);
      if ((box[k] >>> digit) & 1) box[k] ^= 1 << digit;
    }
  }

  function boxIndex(i: number, j: number) {
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
      row[x] ^= 1 << digit;
      col[y] ^= 1 << digit;
      box[boxIndex(x, y)] ^= 1 << digit;
      if (dfs()) return true;
      box[boxIndex(x, y)] |= 1 << digit;
      col[y] |= 1 << digit;
      row[x] |= 1 << digit;
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

  function getAvailableDigits(i: number, j: number) {
    let availableDigits = [];
    let state = row[i] & col[j] & box[boxIndex(i, j)];
    for (let digit = 1; digit <= 9; digit++) {
      if ((state >>> digit) & 1) availableDigits.push(digit);
    }
    return availableDigits;
  }

  dfs();
}
