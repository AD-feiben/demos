package main

func permute(nums []int) [][]int {
	res := [][]int{}
	used := make([]bool, len(nums))

	var find func(path []int, depth int)
	find = func(path []int, depth int) {
		if len(nums) == depth {
			tmp := make([]int, len(path))
			copy(tmp, path)
			res = append(res, tmp)
			return
		}

		for i := 0; i < len(nums); i++ {
			if used[i] {
				continue
			}
			used[i] = true
			path = append(path, nums[i])
			find(path, depth+1)
			path = path[:len(path)-1]
			used[i] = false
		}

	}
	find([]int{}, 0)
	return res
}
