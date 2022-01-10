package main

// Go
// LeetCode 167 两数之和 - 输入有序数组
func twoSum(numbers []int, target int) []int {
	j := len(numbers) - 1
	for i := range numbers {
		for i < j && numbers[i]+numbers[j] > target {
			j--
		}
		if i < j && numbers[i]+numbers[j] == target {
			return []int{i + 1, j + 1}
		}
	}
	return nil
}
