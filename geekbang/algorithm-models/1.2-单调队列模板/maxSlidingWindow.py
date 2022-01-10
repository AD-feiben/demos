# Python
# LeetCode 239 滑动窗口最大值
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        ans = []
        # 数组模拟双端队列，存下标（代表时间）
        l, r = 0, -1 # left, right
        q = [0] * len(nums) # left~right（包含两端）存储队列中的元素
        for i in range(len(nums)):
            # 保证队头合法性
            while l <= r and q[l] <= i - k:
                l += 1
            # 维护队列单调性，插入新的选项
            while l <= r and nums[q[r]] <= nums[i]:
                r -= 1
            r += 1
            q[r] = i
            # 取队头更新答案
            if i >= k - 1:
                ans.append(nums[q[l]])
        return ans
