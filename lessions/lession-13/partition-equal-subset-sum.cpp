class Solution {
public:
    bool canPartition(vector<int>& nums) {
      int n = nums.size();
      nums.insert(nums.begin(), 0);
      int sum = 0;
      for (int num: nums) sum += num;
      if (sum % 2 == 1) return false;

      vector<bool> f(sum / 2 + 1, false);
      f[0] = true;

      for (int i = 1; i <= n; i++) {
        for (int j = sum / 2; j >= nums[i]; j--) {
          f[j] = f[j] || f[j - nums[i]];
        }
      }

      return f[sum / 2];
    }
};