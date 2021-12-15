function findPeakElement(nums: number[]): number {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let lmid = (left + right) >> 1;
    let rmid = lmid + 1;
    if (nums[lmid] <= nums[rmid]) left = lmid + 1;
    if (nums[lmid] > nums[rmid]) right = right - 1;
  }
  return right;
}
