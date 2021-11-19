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