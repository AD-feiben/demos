package main

// Golang

func heapify(array []int, length, i int) {
	left, right := 2*i+1, 2*i+2
	largest := i

	if left < length && array[left] > array[largest] {
		largest = left
	}
	if right < length && array[right] > array[largest] {
		largest = right
	}

	if largest != i {
		array[i], array[largest] = array[largest], array[i]
		heapify(array, length, largest)
	}
}

func heapSort(array []int) {
	if len(array) == 0 {
		return
	}

	length := len(array)
	for i := length/2 - 1; i >= 0; i-- {
		heapify(array, length, i)
	}

	for i := length - 1; i >= 0; i-- {
		array[0], array[i] = array[i], array[0]
	}
}
