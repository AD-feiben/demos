package main

// Go
// LeetCode 84 柱状图中最大的矩形

type Rect struct {
	Height int
	Width  int
}

func largestRectangleArea(heights []int) int {
	heights = append(heights, 0) // 帮助我们在最后把栈清空
	var s []Rect
	ans := 0
	// 每个柱子入栈、出栈各一次，2n=O(n)
	// 第一步：for 每个元素
	for _, h := range heights {
		accumulatedWidth := 0
		// 第二步：while (栈顶不满足高度单调性) 累加宽度，出栈
		for len(s) > 0 && s[len(s)-1].Height >= h {
			accumulatedWidth += s[len(s)-1].Width
			if ans < accumulatedWidth*s[len(s)-1].Height {
				ans = accumulatedWidth * s[len(s)-1].Height
			}
			s = s[:len(s)-1]
		}
		// 第三步：新元素入栈
		s = append(s, Rect{h, accumulatedWidth + 1})
	}
	return ans
}
