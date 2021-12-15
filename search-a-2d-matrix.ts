/** 解法一 */
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;
  let ans = false;

  for (let row = 0; row < m; row++) {
    if (matrix[row][0] <= target && matrix[row][n - 1] >= target) {
      searchRow(row);
      break;
    }
  }

  function searchRow(row: number) {
    let l = 0,
      r = n - 1;
    while (l < r) {
      let mid = (l + r) >> 1;
      if (matrix[row][mid] >= target) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    ans = matrix[row][r] === target;
  }

  return ans;
}

/** 解法二 (参考题解) */
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;

  let l = 0,
    r = m * n - 1;
  while (l < r) {
    let mid = (l + r) >> 1;
    let row = Math.floor(mid / n);
    let col = mid % n;
    let x = matrix[row][col];
    if (x === target) return true;
    if (x > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  let row = Math.floor(r / n);
  let col = r % n;

  return matrix[row][col] === target;
}
