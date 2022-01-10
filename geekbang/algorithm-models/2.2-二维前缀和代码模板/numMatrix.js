// JavaScript
// LeetCode 304 二维区域和检索 - 矩阵不可变
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  // 二维数组初始化，全部清零
  this.sum = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(0));
  // 二维前缀和
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      this.sum[i][j] =
        this.getSum(i - 1, j) +
        this.getSum(i, j - 1) -
        this.getSum(i - 1, j - 1) +
        matrix[i][j];
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.getSum(row2, col2) -
    this.getSum(row1 - 1, col2) -
    this.getSum(row2, col1 - 1) +
    this.getSum(row1 - 1, col1 - 1)
  );
};

NumMatrix.prototype.getSum = function (i, j) {
  if (i >= 0 && j >= 0) return this.sum[i][j];
  return 0;
};
