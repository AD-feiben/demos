class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        self.ans = []
        self.s = []
        self.n = n
        self.k = k
        self.findSubsets(1)
        return self.ans

    def findSubsets(self, index):
        # 已经选了超过k个，
        # 或者把剩下的全选上也不够k个，退出
        if len(self.s) > self.k or len(self.s) + self.n - index + 1 < self.k:
            return
        if index == self.n + 1:
            self.ans.append(self.s[:]) # make a copy
            return
        self.findSubsets(index + 1)
        self.s.append(index)
        self.findSubsets(index + 1)
        self.s.pop()
