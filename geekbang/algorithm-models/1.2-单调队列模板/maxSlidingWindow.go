package main

// GO
// LeetCode 239 滑动窗口最大值
func maxSlidingWindow(nums []int, k int) []int {
	var q, ans []int
	for i := range nums {
		// 保证队头合法性
		for len(q) > 0 && q[0] <= i-k {
			q = q[1:]
		}
		// 维护队列单调性，插入新的选项
		for len(q) > 0 && nums[q[len(q)-1]] <= nums[i] {
			q = q[:len(q)-1]
		}
		q = append(q, i)
		// 取队头更新答案
		if i >= k-1 {
			ans = append(ans, nums[q[0]])
		}
	}
	return ans
}
