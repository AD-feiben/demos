function removeDuplicates(nums: number[]): number {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[cnt++] = nums[i];
    }
  }
  return cnt;
};