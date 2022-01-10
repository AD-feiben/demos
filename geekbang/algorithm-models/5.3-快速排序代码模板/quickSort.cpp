// C/C++


class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        quickSort(nums, 0, nums.size() - 1);
        return nums;
    }


    void quickSort(vector<int>& arr, int l, int r) {
        if (l >= r) return;
        int pivot = partition(arr, l, r);
        quickSort(arr, l, pivot);
        quickSort(arr, pivot + 1, r);
    }


    int partition(vector<int>& a, int l, int r) {
        int pivot = l + rand() % (r - l + 1);
        int pivotVal = a[pivot];


        while (l <= r) {
            while (a[l] < pivotVal) l++;
            while (a[r] > pivotVal) r--;
            if (l == r) break;
            if (l < r) {
                int temp = a[l]; a[l] = a[r]; a[r] = temp;
                l++; r--;
            }
        }


        return r;
    }
};
