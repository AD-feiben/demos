function maxSubArray(nums: number[]): number {
  let n = nums.length;
  let s = new Array(n + 1);
  s[0] = 0;
  for (let i = 1; i <= n; i++) {
    s[i] = s[i - 1] + nums[i - 1];
  }
  let preMin = new Array(n + 1);
  preMin[0] = 0;
  for (let i = 1; i <= n; i++) {
    preMin[i] = Math.min(preMin[i - 1], s[i]);
  }
  let ans = -100000;
  for (let i = 1; i <= n; i++) {
    ans = Math.max(ans, s[i] - preMin[i - 1]);
  }
  return ans;
}
