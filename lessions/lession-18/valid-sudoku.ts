function isValidSudoku(board: string[][]): boolean {
  let row = new Array(9);
  let col = new Array(9);
  let box = new Array(9);

  for (let i = 0; i < 9; i++) {
    row[i] = new Set();
    col[i] = new Set();
    box[i] = new Set();
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let digit = board[i][j];
      if (digit === ".") continue;
      if (row[i].has(digit)) return false;
      row[i].add(digit);

      if (col[j].has(digit)) return false;
      col[j].add(digit);

      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (box[boxIndex].has(digit)) return false;
      box[boxIndex].add(digit);
    }
  }
  return true;
}
