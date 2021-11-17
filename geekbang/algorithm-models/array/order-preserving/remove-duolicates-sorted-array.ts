// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[n] = nums[i];
      n++;
    }
  }
  return n;
};