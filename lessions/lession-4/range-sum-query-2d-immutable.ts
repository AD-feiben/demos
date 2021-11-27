class NumMatrix {
  s: number[][];
  constructor(matrix: number[][]) {
    let n = matrix.length;
    let m = matrix[0].length;
    this.s = new Array(n + 1);
    this.s[0] = new Array(m + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      this.s[i] = new Array(m + 1);
      this.s[i][0] = 0;
      for (let j = 1; j <= m; j++) {
        this.s[i][j] =
          this.s[i - 1][j] +
          this.s[i][j - 1] -
          this.s[i - 1][j - 1] +
          matrix[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    row1++;
    col1++;
    row2++;
    col2++;
    return (
      this.s[row2][col2] -
      this.s[row2][col1 - 1] -
      this.s[row1 - 1][col2] +
      this.s[row1 - 1][col1 - 1]
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
