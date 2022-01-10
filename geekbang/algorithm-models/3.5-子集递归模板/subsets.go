package main

func subsets(nums []int) [][]int {
	var s []int
	var ans [][]int
	var findSubsets func(index int)
	findSubsets = func(index int) {
		if index == len(nums) {
			ans = append(ans, make([]int, 0))
			for _, i := range s {
				ans[len(ans)-1] = append(ans[len(ans)-1], i)
			}
			return
		}
		findSubsets(index + 1)
		s = append(s, nums[index])
		findSubsets(index + 1)
		s = s[:len(s)-1]
	}
	findSubsets(0)
	return ans
}
