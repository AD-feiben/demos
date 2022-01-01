/** 解法一 */
class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
      int n = nums.size();
      nums.insert(nums.begin(), 0);

      vector<int> ss(2 * n + 1, 0);
      for (int i = 1; i <= n; i++)
        ss[i] = ss[i - 1] + nums[i];

      for (int i = n + 1; i <= 2 * n; i++)
        ss[i] = ss[i - 1] + nums[i - n];

      deque<int> q;
      int ans = -1e9;
      // i - n <= j <= i - 1
      for (int i = 1; i <= 2 * n; i++) {
        while (!q.empty() && q.front() < i - n) q.pop_front();
        if (!q.empty()) ans = max(ans, ss[i] - ss[q.front()]);
        while (!q.empty() && ss[q.back()] > ss[i]) q.pop_back();
        q.push_back(i);
      }

      return ans;
    }
};

/** 解法二 */

class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
      int n = nums.size();
      nums.insert(nums.begin(), 0);
      vector<int> s(n + 1, 0);
      for (int i = 1; i <= n; i++)
        s[i] = s[i - 1] + nums[i];

      int temp = 1e9;
      int ans = - 1e9;
      for (int i = 1; i <= n; i++) {
        temp = min(temp, s[i - 1]);
        ans = max(ans, s[i] - temp);
      }

      temp = -1e9;
      int ansMin = 1e9;
      for (int i = 2; i <= n; i++) {
        temp = max(temp, s[i - 1]);
        ansMin = min(ansMin, s[i] - temp);
      }
      for (int i = 1; i < n; i++) ansMin = min(ansMin, s[i]);

      return max(ans, s[n] - ansMin);
    }
};
