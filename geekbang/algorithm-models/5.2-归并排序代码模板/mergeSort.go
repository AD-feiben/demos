package main

// Golang

func mergeSort(array []int, left, right int) {
	if right <= left {
		return
	}
	mid := (left + right) >> 1

	mergeSort(array, left, mid)
	mergeSort(array, mid+1, right)
	merge(array, left, mid, right)
}

func merge(arr []int, left, mid, right int) {
	temp := make([]int, right-left+1)
	i, j, k := left, mid+1, 0

	for ; i <= mid && j <= right; k++ {
		if arr[i] <= arr[j] {
			temp[k] = arr[i]
			i++
		} else {
			temp[k] = arr[j]
			j++
		}
	}

	for ; i <= mid; k++ {
		temp[k] = arr[i]
		i++
	}
	for ; j <= right; k++ {
		temp[k] = arr[j]
		j++
	}

	for i := range temp {
		arr[left+i] = temp[i]
	}
}
