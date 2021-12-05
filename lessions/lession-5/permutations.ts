function permute(nums: number[]): number[][] {
  let ans = [];
  let a = [];
  let used = [];
  let n = nums.length;

  function recur(pos: number) {
    if (pos === n) {
      ans.push(a.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        used[i] = true;
        a.push(nums[i]);
        recur(pos + 1);
        used[i] = false;
        a.pop();
      }
    }
  }

  recur(0);
  return ans;
}
