class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        self.ans = []
        self.s = []
        self.n = len(nums)
        self.findSubsets(nums, 0)
        return self.ans

    def findSubsets(self, nums, index):
        if index == self.n:
            self.ans.append(self.s[:]) # make a copy
            return
        self.findSubsets(nums, index + 1)
        self.s.append(nums[index])
        self.findSubsets(nums, index + 1)
        self.s.pop()


