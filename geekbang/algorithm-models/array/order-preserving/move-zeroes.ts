/**
 * Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[n] = nums[i];
      n++;
    }
  }

  while (n < nums.length) {
    nums[n] = 0;
    n++;
  }
}
