function reversePairs(nums: number[]): number {
  let ans = 0;

  function mergeSort(nums: number[], l: number, r: number) {
    if (l >= r) return;
    let mid = (l + r) >> 1;
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);
    calculate(nums, l, mid, r);
    mrege(nums, l, mid, r);
  }

  function mrege(nums: number[], l: number, mid: number, r: number) {
    // left: [l, mid]
    // right: [mid + 1, r]
    let temp: number[] = [];
    let i = l,
      j = mid + 1;
    while (i <= mid && j <= r) {
      temp.push(nums[i] < nums[j] ? nums[i++] : nums[j++]);
    }
    while (i <= mid) {
      temp.push(nums[i++]);
    }
    while (j <= r) {
      temp.push(nums[j++]);
    }

    nums.splice(l, temp.length, ...temp);
  }

  function calculate(nums: number[], l: number, mid: number, r: number) {
    let j = mid;
    for (let i = l; i <= mid; i++) {
      while (j < r && nums[i] > 2 * nums[j + 1]) j++;
      ans += j - mid;
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return ans;
}
