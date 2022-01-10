// Java


// 普通二分查找
public int binarySearch(int[] array, int target) {
    int left = 0, right = array.length - 1, mid;
    while (left <= right) {
        mid = (right - left) / 2 + left;


        if (array[mid] == target) {
            return mid;
        } else if (array[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }


    return -1;
}


// 更通用的二分模板
// LeetCode34 在排序数组中查找元素的第一个和最后一个位置
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] ans = new int[2];
        // 开始位置（lower_bound）：查询第一个>=target的数
        // 范围 [0 .. n-1 ] + [n表示不存在]
        int left = 0, right = nums.length;
        while (left < right) {
            int mid = (left + right) / 2;
            if (nums[mid] >= target) right = mid;
            else left = mid + 1;
        }
        ans[0] = right;  //第一个>=target的数的下标（不存在为n）


        // 结束位置：查询最后一个<=target的数
        // 范围 [-1表示不存在] + [0 .. n-1 ]
        left = -1; right = nums.length - 1;
        while (left < right) {
            int mid = (left + right + 1) / 2;
            if (nums[mid] <= target) left = mid;
            else right = mid - 1;
        }
        ans[1] = right; //最后一个<=target的数（不存在为-1）


        // target出现在[ans[0], ans[1]]
        if (ans[0] > ans[1]) ans = new int[]{-1, -1};
        return ans;
    }
}


// 实数二分模板
// ans = realSqrt(x, 1e-6)
// 如果要求4位小数，就多算2~4位，到1e-6或1e-8，保证精确
double realSqrt(double x, double eps) {
    double left = 0, right = Math.max(x, 1);
    while (right - left > eps) {
        double mid = (left + right) / 2;
        if (mid * mid <= x) {
            left = mid;
        } else {
            right = mid;
        }
    }
}
