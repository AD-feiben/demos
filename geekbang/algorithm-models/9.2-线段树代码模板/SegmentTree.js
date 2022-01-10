var SegmentTree = function(nums) {
    let n = nums.length;
    this.a = [];
    this.build(1, 0, n - 1, nums);
};


SegmentTree.prototype.Change = function(index, val) {
    this.change(1, index, val);
};


SegmentTree.prototype.Query = function(left, right) {
    return this.query(1, left, right);
};


// 递归建树
SegmentTree.prototype.build = function(curr, l, r, nums) {
    this.a[curr] = {
        l: l,
        r: r,
        mark: 0,
        sum: 0
    };
    // 递归边界：叶子
    if (l == r) {
        this.a[curr].sum = nums[l];
        return;
    }
    let mid = (l + r) >> 1;
    // 分两半，递归
    this.build(curr * 2, l, mid, nums);
    this.build(curr * 2 + 1, mid + 1, r, nums);
    // 回溯时，自底向上统计信息
    this.a[curr].sum = this.a[curr * 2].sum + this.a[curr * 2 + 1].sum;
};


// 单点修改：先递归找到，然后自底向上统计信息
SegmentTree.prototype.change = function(curr, index, val) {
    // 递归边界：叶子[index, index]
    if (this.a[curr].l == this.a[curr].r) {
        this.a[curr].sum = val;
        return;
    }
    this.spread(curr);
    let mid = (this.a[curr].l + this.a[curr].r) >> 1;
    if (index <= mid) this.change(curr * 2, index, val);
    else this.change(curr * 2 + 1, index, val);
    this.a[curr].sum = this.a[curr * 2].sum + this.a[curr * 2 + 1].sum;
};


// 递归求区间和
// 完全包含：直接返回
// 否则：左右划分
SegmentTree.prototype.query = function(curr, l, r) {
    // 查询的是  [l     ,     r]
    // curr结点是[a[curr].l, a[curr].r]
    // l  a[curr].l  a[curr].r  r
    if (l <= this.a[curr].l && r >= this.a[curr].r) return this.a[curr].sum;
    this.spread(curr);
    let mid = (this.a[curr].l + this.a[curr].r) >> 1;
    let ans = 0;
    if (l <= mid) ans += this.query(curr * 2, l, r);
    if (r > mid) ans += this.query(curr * 2 + 1, l, r);
    return ans;
};


// 区间修改
SegmentTree.prototype.changeRange = function(curr, l, r, delta) {
    // 完全包含
    if (l <= this.a[curr].l && r >= this.a[curr].r) {
        // 修改这个被完全包含的区间的信息
        this.a[curr].sum += delta * (this.a[curr].r - this.a[curr].l + 1);
        // 子树不改了，有bug，标记一下
        this.a[curr].mark += delta;
        return;
    }
    this.spread(curr);
    let mid = (this.a[curr].l + this.a[curr].r) >> 1;
    if (l <= mid) this.changeRange(curr * 2, l, r, delta);
    if (r > mid) this.changeRange(curr * 2 + 1, l, r, delta);
    this.a[curr].sum = this.a[curr * 2].sum + this.a[curr * 2 + 1].sum;
};


SegmentTree.prototype.spread = function(curr) {
    if (this.a[curr].mark != 0) { // 有bug标记
        this.a[curr * 2].sum += this.a[curr].mark * (this.a[curr * 2].r - this.a[curr * 2].l + 1);
        this.a[curr * 2].mark += this.a[curr].mark;
        this.a[curr * 2 + 1].sum += this.a[curr].mark * (this.a[curr * 2 + 1].r - this.a[curr * 2 + 1].l + 1);
        this.a[curr * 2 + 1].mark += this.a[curr].mark;
        this.a[curr].mark = 0;
    }
};


var NumArray = function(nums) {
    this.tree = new SegmentTree(nums);
};


NumArray.prototype.update = function(index, val) {
    this.tree.Change(index, val);
};


NumArray.prototype.sumRange = function(left, right) {
    return this.tree.Query(left, right);
};




/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.update(index,val);
 * int param_2 = obj.sumRange(left,right);
 */
