package main

// Golang

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	return nil
}

func sortArray(nums []int) []int {
	quickSort(nums, 0, len(nums)-1)
	return nums
}

func quickSort(arr []int, l, r int) {
	if l >= r {
		return
	}
	pivot := partition(arr, l, r)
	quickSort(arr, l, pivot)
	quickSort(arr, pivot+1, r)
}

func partition(a []int, l, r int) int {
	pivot := l + rand.Intn(r-l+1)
	pivotVal := a[pivot]

	for l <= r {
		for a[l] < pivotVal {
			l++
		}
		for a[r] > pivotVal {
			r--
		}
		if l == r {
			break
		}
		if l < r {
			a[l], a[r] = a[r], a[l]
			l++
			r--
		}
	}
	return r
}
