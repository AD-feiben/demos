function findMin(nums: number[]): number {
  /**
    1. nums[mid] > nums[right] 最小值在右侧 mid + 1 ~ right
    2. nums[mid] <= nums[right] 最小值在 left ~ mid;
   */
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[right];
}
