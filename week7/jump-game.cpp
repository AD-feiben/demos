// 参考题解
class Solution {
public:
    bool canJump(vector<int>& nums) {
      int n = nums.size();
      if (n == 1) return true;
      vector<int> f(n, 0);
      f[0] = nums[0];
      int maxPos = nums[0];
      for (int i = 1; i < n; i++) {
        if (i > maxPos) return false;
        f[i] = max(f[i -  1], i + nums[i]);
        // 记录能到达最远位置的索引
        maxPos = max(maxPos, f[i]);
        if (maxPos >= n - 1) return true;
      }
      return false;
    }
};



// 动规 -> 贪心
class Solution {
public:
    bool canJump(vector<int>& nums) {
      int n = nums.size();
      if (n == 1) return true;
      // vector<int> f(n, 0);
      // f[0] = nums[0];
      int maxPos = nums[0];
      for (int i = 1; i < n; i++) {
        if (i > maxPos) return false;
        // f[i] = max(f[i -  1], i + nums[i]);
        // maxPos = max(maxPos, f[i]);
        // 从上面的步骤可知 maxPos = max(max(maxPos, f[i -  1]), i + nums[i]);
        // max(maxPos, f[i -  1]) 在上一轮循环时已经得出并保存在 maxPos, 因此 f[i - 1] 可以省略
        maxPos = max(maxPos, i + nums[i]);
        if (maxPos >= n - 1) return true;
      }
      return false;
    }
};