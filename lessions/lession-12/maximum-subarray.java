class Solution {
    public int maxSubArray(int[] nums) {
      int n = nums.length;
      int[] f = new int[n];
      f[0] = nums[0];
      for (int i = 1; i < n; i++) {
        f[i] = Math.max(nums[i], f[i - 1] + nums[i]);
      }

      int ans = f[0];
      for (int i = 1; i < n; i++) {
        ans = Math.max(ans, f[i]);
      }
      return ans;
    }
}