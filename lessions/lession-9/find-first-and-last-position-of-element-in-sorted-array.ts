function searchRange(nums: number[], target: number): number[] {
  // 开始位置 第一个 >= target
  // 结束位置 最后一个 <= target

  let ans = [];
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  ans.push(right);

  (left = -1), (right = nums.length - 1);
  while (left < right) {
    let mid = (left + right + 1) >> 1;
    if (nums[mid] <= target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  ans.push(right);

  if (ans[0] > ans[1]) return [-1, -1];
  return ans;
}
