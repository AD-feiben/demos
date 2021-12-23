class Solution {
    public int maxProduct(int[] nums) {
      int n = nums.length;
      int[] fmax = new int[n];
      int[] fmin = new int[n];

      fmax[0] = nums[0];
      fmin[0] = nums[0];

      for (int i = 1; i < n; i++) {
        fmax[i] = Math.max(nums[i], Math.max(fmax[i - 1] * nums[i], fmin[i - 1] * nums[i]));
        fmin[i] = Math.min(nums[i], Math.min(fmax[i - 1] * nums[i], fmin[i - 1] * nums[i]));
      }

      int ans = fmax[0];
      for (int i = 1; i < n; i++) {
        ans = Math.max(ans, fmax[i]);
      }
      return ans;
    }
}