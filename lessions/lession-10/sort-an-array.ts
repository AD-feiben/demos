function partition(arr: number[], l: number, r: number): number {
  let pivot = l + Math.trunc(Math.random() * (r - l + 1));
  let pivotVal = arr[pivot];
  while (l <= r) {
    while (arr[l] < pivotVal) l++;
    while (arr[r] > pivotVal) r--;
    if (l === r) break;
    if (l < r) {
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }
  return r;
}

function quickSort(arr: number[], l: number, r: number) {
  if (l >= r) return;
  let pivot = partition(arr, l, r);
  quickSort(arr, l, pivot);
  quickSort(arr, pivot + 1, r);
}

function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}
