/**
 * Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;

  for (let k = m + n - 1; k >= 0; k--) {
    // 取大值
    // j < 0 直接取 nums1 中的数据
    if (j < 0 || (i >= 0 && nums1[i] >= nums2[j])) {
      nums1[k] = nums1[i];
      i--
    } else {
      nums1[k] = nums2[j];
      j--;
    }
  }
}
