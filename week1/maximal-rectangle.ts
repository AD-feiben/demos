function largestRectangleArea(heights: number[]): number {
  let stack = [];
  let ans = 0;
  heights.push(0);
  for (let height of heights) {
    let width = 0;
    while (stack.length !== 0 && height < stack[stack.length - 1].height) {
      let last = stack.pop();
      width += last.width;
      ans = Math.max(ans, width * last.height);
    }
    stack.push({ width: width + 1, height });
  }
  return ans;
};

function maximalRectangle(matrix: string[][]): number {
  let m = matrix.length;
  if (m === 0) return 0;
  let n = matrix[0].length;
  let ans = 0;

  let heights = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0') {
        heights[j] = 0;
      } else {
        heights[j] += Number(matrix[i][j]);
      }
    }
    ans = Math.max(ans, largestRectangleArea(heights));
  }
  return ans;
};