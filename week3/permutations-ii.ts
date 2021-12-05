function permuteUnique(nums: number[]): number[][] {
  let ans: number[][] = [];
  let temp: number[] = [];
  let n = nums.length;
  let used = new Array(n).fill(false);

  function recur(k: number) {
    if (k === n) {
      ans.push(temp.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      /**
       * i > 0 && nums[i] === nums[i - 1] && !used[i - 1]
       * 当前元素的值与前一个元素的值一样，如果前一个元素还没被使用，说明走老路了
       */
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
        continue;
      used[i] = true;
      temp.push(nums[i]);
      recur(k + 1);
      used[i] = false;
      temp.pop();
    }
  }

  nums.sort((a, b) => a - b);
  recur(0);
  return ans;
}
