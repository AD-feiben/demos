// Java
// LeetCode 239 滑动窗口最大值
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] ans = new int[nums.length - k + 1];
        // 双端队列，存下标（代表时间）
        Deque<Integer> q = new LinkedList<>();
        for (int i = 0; i < nums.length; i++) {
            // 保证队头合法性
            while (!q.isEmpty() && q.getFirst() <= i - k) q.removeFirst();
            // 维护队列单调性，插入新的选项
            while (!q.isEmpty() && nums[q.getLast()] <= nums[i]) q.removeLast();
            q.addLast(i);
            // 取队头更新答案
            if (i >= k - 1) ans[i - (k - 1)] = nums[q.getFirst()];
        }
        return ans;
    }
}
