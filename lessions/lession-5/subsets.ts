function subsets(nums: number[]): number[][] {
  let ans = [];
  let n = nums.length;

  let temp = [];

  function recur(i: number) {
    if (i === n) {
      ans.push(temp.slice());
      return;
    }
    recur(i + 1);
    temp.push(nums[i]);
    recur(i + 1);
    temp.pop();
  }

  recur(0);
  return ans;
}
