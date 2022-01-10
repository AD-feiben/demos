// JavaScript
// LeetCode 1248 统计优美子数组
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  var n = nums.length;
  nums.unshift(0);
  var s = new Array(n + 1).fill(0); // 下标0~n
  for (let i = 1; i <= n; i++) s[i] = s[i - 1] + (nums[i] % 2);

  var count = new Array(n + 1).fill(0); // 下标0~n
  for (let i = 0; i <= n; i++) count[s[i]] += 1;

  // s[i] + s[j] = k
  // Home many s[j] equals s[i] - k?
  var ans = 0;
  for (let i = 1; i <= n; i++) if (s[i] - k >= 0) ans += count[s[i] - k];
  return ans;
};
