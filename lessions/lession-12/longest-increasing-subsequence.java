class Solution {
    public int lengthOfLIS(int[] nums) {
      int n = nums.length;
      int[] f = new int[n];
      for (int i = 0; i < n; i++) f[i] = 1;

      for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
            f[i] = Math.max(f[i], f[j] + 1);
          }
        }
      }

      int ans = 0;
      for (int i = 0; i < n; i++) {
        ans = Math.max(ans, f[i]);
      }
      return ans;
    }
}