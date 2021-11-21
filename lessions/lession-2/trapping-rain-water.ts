function trap(heights: number[]): number {
  let stack = [];
  let ans = 0;

  for (let height of heights) {
    let accumulatedWidth = 0;
    while (stack.length !== 0 && height >= stack[stack.length - 1].height) {
      let { width, height: bottom } = stack.pop();
      if (stack.length <= 0) break;
      let left = stack[stack.length - 1];
      let up = Math.min(height, left.height);
      accumulatedWidth += width;
      ans += accumulatedWidth * (up - bottom);
    }

    stack.push({
      width: accumulatedWidth + 1,
      height,
    });
  }
  return ans;
}
