// JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}


var quickSort = function(arr, l, r) {
    if (l >= r) return;
    let pivot = partition(arr, l, r);
    quickSort(arr, l, pivot);
    quickSort(arr, pivot + 1, r);
}


var partition = function(a, l, r) {
    let pivot = l + Math.floor(Math.random() * (r - l + 1));
    let pivotVal = a[pivot];


    while (l <= r) {
        while (a[l] < pivotVal) l++;
        while (a[r] > pivotVal) r--;
        if (l == r) break;
        if (l < r) {
            let temp = a[l]; a[l] = a[r]; a[r] = temp;
            l++; r--;
        }
    }
    return r;
}
