// Java
// LeetCode 1248 统计优美子数组
class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        int n = nums.length;
        int[] s = new int[n + 1]; // 0~n
        int[] count = new int[n + 1];
        // s[0] = 0;
        count[s[0]]++;
        for (int i = 1; i <= n; i++) {
            s[i] = s[i - 1] + nums[i - 1] % 2;
            count[s[i]]++;
        }


        int ans = 0;
        for (int i = 1; i <= n; i++) {
            // s[i] - s[j] = k, 求j的数量
            // s[j] = s[i] - k
            if (s[i] - k >= 0) {
                ans += count[s[i] - k];
            }
        }
        return ans;
    }
}
