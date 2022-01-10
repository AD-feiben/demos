# Python
# LeetCode 1248 统计优美子数组
class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        nums = [0] + nums
        s = [0] * len(nums)
        for i in range(1, len(nums)):
            s[i] = s[i - 1] + nums[i] % 2
        count = [0] * len(s)
        for i in range(len(s)):
            count[s[i]] += 1
        ans = 0
        for i in range(1, len(s)):
            if s[i] - k >= 0:
                ans += count[s[i] - k]
        return ans
