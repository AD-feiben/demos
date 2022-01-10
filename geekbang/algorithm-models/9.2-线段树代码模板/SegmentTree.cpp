class SegmentTree {
public:
    SegmentTree(vector<int>& nums) {
        n = nums.size();
        a = vector<Node>(4 * n);
        build(1, 0, n - 1, nums);
    }


    void Change(int index, int val) {
        change(1, index, val);
    }


    int Query(int left, int right) {
        return query(1, left, right);
    }


private:
    struct Node {
        int l, r;
        int sum;
        int mark; // 标记：曾经想加mark，还没加，之后需要填坑
    };


    // 递归建树
    void build(int curr, int l, int r, vector<int>& nums) {
        a[curr].l = l;
        a[curr].r = r;
        a[curr].mark = 0;
        // 递归边界：叶子
        if (l == r) {
            a[curr].sum = nums[l];
            return;
        }
        int mid = (l + r) / 2;
        // 分两半，递归
        build(curr * 2, l, mid, nums);
        build(curr * 2 + 1, mid + 1, r, nums);
        // 回溯时，自底向上统计信息
        a[curr].sum = a[curr * 2].sum + a[curr * 2 + 1].sum;
    }


    // 单点修改：先递归找到，然后自底向上统计信息
    void change(int curr, int index, int val) {
        // 递归边界：叶子[index, index]
        if (a[curr].l == a[curr].r) {
            a[curr].sum = val;
            return;
        }
        spread(curr);
        int mid = (a[curr].l + a[curr].r) / 2;
        if (index <= mid) change(curr * 2, index, val);
        else change(curr * 2 + 1, index, val);
        a[curr].sum = a[curr * 2].sum + a[curr * 2 + 1].sum;
    }


    // 递归求区间和
    // 完全包含：直接返回
    // 否则：左右划分
    int query(int curr, int l, int r) {
        // 查询的是  [l     ,     r]
        // curr结点是[a[curr].l, a[curr].r]
        // l  a[curr].l  a[curr].r  r
        if (l <= a[curr].l && r >= a[curr].r) return a[curr].sum;
        spread(curr);
        int mid = (a[curr].l + a[curr].r) / 2;
        int ans = 0;
        if (l <= mid) ans += query(curr * 2, l, r);
        if (r > mid) ans += query(curr * 2 + 1, l, r);
        return ans;
    }


    // 区间修改
    void change(int curr, int l, int r, int delta) {
        // 完全包含
        if (l <= a[curr].l && r >= a[curr].r) {
            // 修改这个被完全包含的区间的信息
            a[curr].sum += delta * (a[curr].r - a[curr].l + 1);
            // 子树不改了，有bug，标记一下
            a[curr].mark += delta;
            return;
        }
        spread(curr);
        int mid = (a[curr].l + a[curr].r) / 2;
        if (l <= mid) change(curr * 2, l, r, delta);
        if (r > mid) change(curr * 2 + 1, l, r, delta);
        a[curr].sum = a[curr * 2].sum + a[curr * 2 + 1].sum;
    }


    void spread(int curr) {
        if (a[curr].mark != 0) { // 有bug标记
            a[curr * 2].sum += a[curr].mark * (a[curr * 2].r - a[curr * 2].l + 1);
            a[curr * 2].mark += a[curr].mark;
            a[curr * 2 + 1].sum += a[curr].mark * (a[curr * 2 + 1].r - a[curr * 2 + 1].l + 1);
            a[curr * 2 + 1].mark += a[curr].mark;
            a[curr].mark = 0;
        }
    }


    int n;
    vector<Node> a; // 长4N的数组，存线段树
};


class NumArray {
public:
    NumArray(vector<int>& nums) : tree(SegmentTree(nums)) {
    }

    void update(int index, int val) {
        tree.Change(index, val);
    }

    int sumRange(int left, int right) {
        return tree.Query(left, right);
    }


    SegmentTree tree;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * obj->update(index,val);
 * int param_2 = obj->sumRange(left,right);
 */
