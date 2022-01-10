class BinaryIndexedTree:
    def __init__(self, nums):
        self.n = len(nums)
        self.a = [0] * (self.n + 1)
        self.c = [0] * (self.n + 1)
        for i in range(1, self.n + 1):
            self.a[i] = nums[i - 1]
            self.add(i, self.a[i])


    def add(self, pos, delta):
        while pos <= self.n:
            self.c[pos] += delta
            pos += pos & -pos


    def get(self, index):
        return self.a[index]


    def set(self, index, value):
        self.a[index] = value


    def sumPrefix(self, pos):
        ans = 0
        while pos > 0:
            ans += self.c[pos]
            pos -= pos & -pos
        return ans


class NumArray:


    def __init__(self, nums: List[int]):
        self.tree = BinaryIndexedTree(nums)




    def update(self, index: int, val: int) -> None:
        index += 1
        self.tree.add(index, val - self.tree.get(index))
        self.tree.set(index, val)


    def sumRange(self, left: int, right: int) -> int:
        left += 1
        right += 1
        return self.tree.sumPrefix(right) - self.tree.sumPrefix(left - 1)






# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)
