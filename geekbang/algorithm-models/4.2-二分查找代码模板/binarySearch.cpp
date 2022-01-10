// C/C++


// 普通二分查找
int binarySearch(const vector<int>& nums, int target) {
	int left = 0, right = (int)nums.size()-1;

	while (left <= right) {
		int mid = left + (right - left)/ 2;
		if (nums[mid] == target) return mid;
		else if (nums[mid] < target) left = mid + 1;
		else right = mid - 1;
	}

	return -1;
}


// 更通用的二分模板
// LeetCode34 在排序数组中查找元素的第一个和最后一个位置
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> ans;
        // 开始位置（lower_bound）：查询第一个>=target的数
        // 范围 [0 .. n-1 ] + [n表示不存在]
        int left = 0, right = nums.size();
        while (left < right) {
            int mid = (left + right) / 2;
            if (nums[mid] >= target) right = mid;
            else left = mid + 1;
        }
        ans.push_back(right);  //第一个>=target的数的下标（不存在为n）


        // 结束位置：查询最后一个<=target的数
        // 范围 [-1表示不存在] + [0 .. n-1 ]
        left = -1, right = nums.size() - 1;
        while (left < right) {
            int mid = (left + right + 1) / 2;
            if (nums[mid] <= target) left = mid;
            else right = mid - 1;
        }
        ans.push_back(right); //最后一个<=target的数（不存在为-1）


        // target出现在[ans[0], ans[1]]
        if (ans[0] > ans[1]) ans = {-1, -1};
        return ans;
    }
};


// 实数二分模板
// ans = realSqrt(x)
// 如果要求4位小数，就多算2~4位，到1e-6或1e-8，保证精确
double realSqrt(double x, double eps = 1e-6) {
    double left = 0, right = max(x, 1.0);
    while (right - left > eps) {
        double mid = (left + right) / 2;
        if (mid * mid <= x) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return right;
}
