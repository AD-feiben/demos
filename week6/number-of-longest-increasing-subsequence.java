/** 参考题解 */
class Solution {
    public int findNumberOfLIS(int[] nums) {
      int n = nums.length;
      int[] f = new int[n];
      int[] cnt = new int[n];
      int maxLen = 0;
      int ans = 0;

      for (int i = 0; i < n; i++) {
        f[i] = 1;
        cnt[i] = 1;
        for (int j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
            if (f[i] < f[j] + 1) {
              f[i] = f[j] + 1;
              cnt[i] = cnt[j];
            } else if (f[i] == f[j] + 1) {
              cnt[i] += cnt[j];
            }
          }
        }


        if (f[i] > maxLen) {
          maxLen = f[i];
          ans = cnt[i];
        } else if (f[i] == maxLen) {
          ans += cnt[i];
        }
      }

      return ans;
    }
}