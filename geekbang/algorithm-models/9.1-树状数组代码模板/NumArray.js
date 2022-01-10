/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.n = nums.length;
    this.c = [];
    for (let i = 0; i <= this.n; i++) {
        this.c[i] = 0;
    }
    this.a = [];
    for (let i = 1; i <= this.n; i++) {
        this.a[i] = nums[i - 1]; // 下标变为从1开始
        this.add(i, this.a[i]);
    }
};


/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    index++; // 下标从1开始
    let delta = val - this.a[index];
    this.add(index, delta);
    this.a[index] = val;
};


/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    left++; right++; // 下标从1开始
    return this.query(right) - this.query(left - 1);
}


NumArray.prototype.query = function(x) {
    let ans = 0;
    for (; x > 0; x -= this.lowbit(x)) ans += this.c[x];
    return ans;
};


NumArray.prototype.add = function(x, delta) {
    for (; x <= this.n; x += this.lowbit(x)) this.c[x] += delta;
}


NumArray.prototype.lowbit = function(x) {
    return x & (-x);
}
/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.update(index,val);
 * int param_2 = obj.sumRange(left,right);
 */


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
