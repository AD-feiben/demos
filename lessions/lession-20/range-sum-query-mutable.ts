class NumArray {
  _n: number;
  _a: number[];
  _c: number[];

  constructor(nums: number[]) {
    this._n = nums.length;
    this._a = new Array(this._n + 1).fill(0);
    this._c = new Array(this._n + 1).fill(0);
    for (let i = 1; i <= this._n; i++) {
      this._a[i] = nums[i - 1];
      this._add(i, this._a[i]);
    }
  }

  _add(x: number, delta: number) {
    for (; x <= this._n; x += this._lowbit(x)) this._c[x] += delta;
  }

  _query(x: number) {
    let ans = 0;
    for (; x > 0; x -= this._lowbit(x)) ans += this._c[x];
    return ans;
  }

  _lowbit(x: number) {
    return x & -x;
  }

  update(index: number, val: number): void {
    index++;
    this._add(index, val - this._a[index]);
    this._a[index] = val;
  }

  sumRange(left: number, right: number): number {
    left++, right++;
    return this._query(right) - this._query(left - 1);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
