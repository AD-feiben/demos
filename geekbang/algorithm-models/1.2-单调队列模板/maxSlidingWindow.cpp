// C/C++
// LeetCode 239 滑动窗口最大值
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> ans;
        // 双端队列，存下标（代表时间）
        deque<int> q;
        for (int i = 0; i < nums.size(); i++) {
            // 保证队头合法性
            while (!q.empty() && q.front() <= i - k) q.pop_front();
            // 维护队列单调性，插入新的选项
            while (!q.empty() && nums[q.back()] <= nums[i]) q.pop_back();
            q.push_back(i);
            // 取队头更新答案
            if (i >= k - 1) ans.push_back(nums[q.front()]);
        }
        return ans;
    }
};
/*
1 3 [-1 -3 5] 3 6 7
时间：expire_time(-1) < expire_time(-3) < expire_time(5)
值大小：-1 < -3 < 5
求max
冗余：一个下标i一个下标j，如果i<j，并且nums[i]<=nums[j]，i是冗余
去除冗余：维护下标（时间）递增、nums递减（>=）的队列
队头最优，随着下标增长，队头expire后，后面的开始逐渐变成最优
*/
