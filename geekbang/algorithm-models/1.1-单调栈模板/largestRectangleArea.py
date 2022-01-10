# Python
# LeetCode 84 柱状图中最大的矩形

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        heights.append(0) # 帮助我们在最后把栈清空
        stack = [] # [[height, width], ...]
        ans = 0
        # 每个柱子入栈、出栈各一次，2n=O(n)
        # 第一步：for 每个元素
        for h in heights:
            accumulated_width = 0
            # 第二步：while (栈顶不满足高度单调性) 累加宽度，出栈
            while stack and stack[-1][0] >= h:
                accumulated_width += stack[-1][1]
                ans = max(ans, accumulated_width * stack[-1][0])
                stack.pop()
            # 第三步：新元素入栈
            stack.append([h, accumulated_width + 1])
        return ans
