package main

// 普通二分查找
func binarySearch(nums []int, target int) int {
	var i, j = 0, len(nums) - 1
	for i <= j {
		var mid = i + (j-i)/2
		if nums[mid] == target {
			return mid
		}
		if target > nums[mid] {
			i = mid + 1
		} else {
			j = mid - 1
		}
	}
	return -1
}

// 更通用的二分模板
func searchRange(nums []int, target int) []int {
	left, right := 0, len(nums)-1
	for {
		if left > right {
			return []int{-1, -1}
		}
		mid := (left + right) / 2
		if nums[mid] == target {
			leftBound := findLeftBound(nums, left, mid, target)
			rightBound := findRightBound(nums, mid, right, target)
			return []int{leftBound, rightBound}
		} else if nums[mid] > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
}

func findLeftBound(nums []int, left, right, target int) int {
	for {
		if left > right {
			return left
		}
		mid := (left + right) / 2
		if nums[mid] == target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
}

func findRightBound(nums []int, left, right, target int) int {
	for {
		if left > right {
			return right
		}
		mid := (left + right) / 2
		if nums[mid] == target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
}

func realSqrt(x int, eps float64) float64 {
	left := 0.0
	right := x
	for right-left > eps {
		var mid = (left + right) / 2
		if mid*mid <= x {
			left = mid
		} else {
			right = mid
		}
	}
	return right
}
