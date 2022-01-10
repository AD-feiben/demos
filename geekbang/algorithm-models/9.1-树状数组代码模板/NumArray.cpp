class BinaryIndexedTree {
public:
    BinaryIndexedTree(vector<int>& nums) {
        n = nums.size();
        a = c = vector<int>(n + 1, 0);
        for (int i = 1; i <= n; i++) {
            a[i] = nums[i - 1];
            add(i, a[i]);
        }
    }


    void add(int pos, int delta) {
        for (; pos <= n; pos += pos & -pos) c[pos] += delta;
    }


    int get(int index) {
        return a[index];
    }


    void set(int index, int value) {
        a[index] = value;
    }


    int sumPrefix(int pos) {
        int ans = 0;
        for (; pos > 0; pos -= pos & -pos) ans += c[pos];
        return ans;
    }


private:
    int n;
    vector<int> a;
    vector<int> c;
};


class NumArray {
public:
    NumArray(vector<int>& nums)  : tree(BinaryIndexedTree(nums)) {
    }

    void update(int index, int val) {
        index++;
        tree.add(index, val - tree.get(index));
        tree.set(index, val);
    }

    int sumRange(int left, int right) {
        left++, right++;
        return tree.sumPrefix(right) - tree.sumPrefix(left - 1);
    }


    BinaryIndexedTree tree;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * obj->update(index,val);
 * int param_2 = obj->sumRange(left,right);
 */
