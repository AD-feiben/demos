// C/C++
// LeetCode 84 柱状图中最大的矩形
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        heights.push_back(0); // 帮助我们在最后把栈清空
        stack<Rect> s;
        int ans = 0;
        // 每个柱子入栈、出栈各一次，2n=O(n)
        // 第一步：for 每个元素
        for (int h : heights) {
            int accumulated_width = 0;
            // 第二步：while (栈顶不满足高度单调性) 累加宽度，出栈
            while (!s.empty() && s.top().height >= h) {
                accumulated_width += s.top().width;
                ans = max(ans, accumulated_width * s.top().height);
                s.pop();
            }
            // 第三步：新元素入栈
            s.push({h, accumulated_width + 1});
        }
        return ans;
    }


private:
    struct Rect {
        int height;
        int width;
    };
};
