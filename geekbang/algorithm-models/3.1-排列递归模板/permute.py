class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        self.nums = nums
        self.ans = []
        self.per = []
        self.n = len(nums)
        self.used = [False] * self.n
        self.find(0)
        return self.ans


    # 依次考虑0,1,...,n-1位置放哪个数
    # “从还没用过的”数中选一个放在当前位置
    def find(self, index):
        if index == self.n:
            self.ans.append(self.per[:])  # make a copy
            return
        for i in range(self.n):
            if not self.used[i]:
                self.used[i] = True
                self.per.append(self.nums[i])
                self.find(index + 1)
                self.per.pop()
                self.used[i] = False
