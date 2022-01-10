class Node:
    def __init__(self):
        self.l = self.r = self.sum = self.mark = 0


class SegmentTree:
    def __init__(self, nums):
        n = len(nums)
        self.a = [Node() for i in range(4 * n)]
        self.build(1, 0, n - 1, nums)


    def Change(self, index, val):
        self.change(1, index, val)


    def Query(self, left, right):
        return self.query(1, left, right)


    # 递归建树
    def build(self, curr, l, r, nums):
        self.a[curr].l = l
        self.a[curr].r = r
        self.a[curr].mark = 0
        # 递归边界：叶子
        if l == r:
            self.a[curr].sum = nums[l]
            return
        mid = (l + r) >> 1
        # 分两半，递归
        self.build(curr * 2, l, mid, nums)
        self.build(curr * 2 + 1, mid + 1, r, nums)
        # 回溯时，自底向上统计信息
        self.a[curr].sum = self.a[curr * 2].sum + self.a[curr * 2 + 1].sum


    # 单点修改：先递归找到，然后自底向上统计信息
    def change(self, curr, index, val):
        # 递归边界：叶子[index, index]
        if self.a[curr].l == self.a[curr].r:
            self.a[curr].sum = val
            return
        self.spread(curr)
        mid = (self.a[curr].l + self.a[curr].r) >> 1
        if index <= mid:
            self.change(curr * 2, index, val)
        else:
            self.change(curr * 2 + 1, index, val)
        self.a[curr].sum = self.a[curr * 2].sum + self.a[curr * 2 + 1].sum


    # 递归求区间和
    # 完全包含：直接返回
    # 否则：左右划分
    def query(self, curr, l, r):
        # 查询的是  [l     ,     r]
        # curr结点是[a[curr].l, a[curr].r]
        # l  a[curr].l  a[curr].r  r
        if l <= self.a[curr].l and r >= self.a[curr].r:
            return self.a[curr].sum
        self.spread(curr)
        mid = (self.a[curr].l + self.a[curr].r) >> 1
        ans = 0
        if l <= mid:
            ans += self.query(curr * 2, l, r)
        if r > mid:
            ans += self.query(curr * 2 + 1, l, r)
        return ans


    # 区间修改
    def changeRange(self, curr, l, r, delta):
        # 完全包含
        if l <= self.a[curr].l and r >= self.a[curr].r:
            # 修改这个被完全包含的区间的信息
            self.a[curr].sum += delta * (self.a[curr].r - self.a[curr].l + 1)
            # 子树不改了，有bug，标记一下
            self.a[curr].mark += delta
            return
        self.spread(curr)
        mid = (self.a[curr].l + self.a[curr].r) >> 1
        if l <= mid:
            self.changeRange(curr * 2, l, r, delta)
        if r > mid:
            self.changeRange(curr * 2 + 1, l, r, delta)
        self.a[curr].sum = self.a[curr * 2].sum + self.a[curr * 2 + 1].sum


    def spread(self, curr):
        if self.a[curr].mark != 0:
            self.a[curr * 2].sum += self.a[curr].mark * (self.a[curr * 2].r - self.a[curr * 2].l + 1)
            self.a[curr * 2].mark += self.a[curr].mark
            self.a[curr * 2 + 1].sum += self.a[curr].mark * (self.a[curr * 2 + 1].r - self.a[curr * 2 + 1].l + 1)
            self.a[curr * 2 + 1].mark += self.a[curr].mark
            self.a[curr].mark = 0




class NumArray:


    def __init__(self, nums: List[int]):
        self.tree = SegmentTree(nums)




    def update(self, index: int, val: int) -> None:
        self.tree.Change(index, val)


    def sumRange(self, left: int, right: int) -> int:
        return self.tree.Query(left, right)






# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)
