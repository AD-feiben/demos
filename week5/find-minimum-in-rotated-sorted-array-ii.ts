/** 参考题解 */
function findMin(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = (l + r) >> 1;
    if (nums[mid] < nums[r]) {
      r = mid;
    } else if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r--;
    }
  }
  return nums[r];
}
