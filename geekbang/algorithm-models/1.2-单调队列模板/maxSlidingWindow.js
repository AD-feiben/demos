// JavaScript
// LeetCode 239 滑动窗口最大值
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  var ans = [] // 数组模拟双端队列，存下标（代表时间）
  var l = 0,
    r = -1 // left, right
  var q = [] // left~right（包含两端）存储队列中的元素
  for (let i = 0; i < nums.length; i++) {
    // 保证队头合法性
    while (l <= r && q[l] <= i - k) l++ // 维护队列单调性，插入新的选项
    while (l <= r && nums[q[r]] <= nums[i]) r--
    r++
    q[r] = i // 取队头更新答案
    if (i >= k - 1) ans.push(nums[q[l]])
  }
  return ans
}
