function getKthLargest(nums: number[], l: number, r: number, pos: number) {
  if (l >= r) return nums[l];
  let pivot = partation(nums, l, r);
  if (pos <= pivot) return getKthLargest(nums, l, pivot, pos);
  else return getKthLargest(nums, pivot + 1, r, pos);
}

function partation(nums: number[], l: number, r: number) {
  let pivot = l + Math.floor(Math.random() * (r - l + 1));
  let pivotVal = nums[pivot];
  while (l <= r) {
    while (nums[l] < pivotVal) l++;
    while (nums[r] > pivotVal) r--;
    if (l === r) break;
    if (l < r) {
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    }
  }
  return r;
}

function findKthLargest(nums: number[], k: number): number {
  return getKthLargest(nums, 0, nums.length - 1, nums.length - k);
}
