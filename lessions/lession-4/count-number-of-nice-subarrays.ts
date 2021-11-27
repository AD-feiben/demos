function numberOfSubarrays(nums: number[], k: number): number {
  let n = nums.length;
  let s = [0];
  for (let i = 1; i <= n; i++) {
    s[i] = s[i - 1] + (nums[i - 1] % 2);
  }
  let ans = 0;
  let count = new Array(n + 1).fill(0);
  count[s[0]]++;
  for (let i = 1; i <= n; i++) {
    if (s[i] - k >= 0) ans += count[s[i] - k];
    count[s[i]]++;
  }
  return ans;
}
