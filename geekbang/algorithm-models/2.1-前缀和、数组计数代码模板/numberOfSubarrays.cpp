// C/C++
// LeetCode 1248 统计优美子数组
class Solution {
public:
    int numberOfSubarrays(vector<int>& nums, int k) {
        // 开头插入一个0，转化成下标1~n
        int n = nums.size();
        nums.insert(nums.begin(), 0);
        // 前缀和，下标0~n
        vector<int> sum(n + 1, 0);
        for (int i = 1; i <= n; i++)
            sum[i] = sum[i - 1] + nums[i] % 2;
        // 计数，下标0~n
        vector<int> count(n + 1, 0);
        for (int i = 0; i <= n; i++)
            count[sum[i]]++;
        int ans = 0;
        for (int i = 0; i < nums.size(); i++)
            ans += sum[i] >= k ? count[sum[i] - k] : 0;
        return ans;
    }
};
