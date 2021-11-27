function maxArea(height: number[]): number {
  let ans = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    ans = Math.max(ans, (j - i) * Math.min(height[i], height[j]));
    height[i] > height[j] ? j-- : i++;
  }
  return ans;
}
