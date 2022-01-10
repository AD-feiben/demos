// Java
// LeetCode 84 柱状图中最大的矩形
class Solution {
    public int largestRectangleArea(int[] heights) {
        int n = heights.length;
        int[] heights_with_zero = Arrays.copyOf(heights, n + 1);
        heights_with_zero[n] = 0; // 帮助我们在最后把栈清空
        Stack<Rect> s = new Stack<Rect>();
        int ans = 0;
        // 每个柱子入栈、出栈各一次，2n=O(n)
        // 第一步：for 每个元素
        for (Integer h : heights_with_zero) {
            int accumulated_width = 0;
            // 第二步：while (栈顶不满足高度单调性) 累加宽度，出栈
            while (!s.empty() && s.peek().height >= h) {
                accumulated_width += s.peek().width;
                ans = Math.max(ans, accumulated_width * s.peek().height);
                s.pop();
            }
            // 第三步：新元素入栈
            Rect rect = new Rect();
            rect.height = h;
            rect.width = accumulated_width + 1;
            s.push(rect);
        }
        return ans;
    }


    private class Rect {
        public int height;
        public int width;
    };
}
