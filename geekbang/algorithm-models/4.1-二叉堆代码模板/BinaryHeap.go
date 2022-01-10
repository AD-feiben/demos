package main

func mergeKLists(lists []*ListNode) *ListNode {
	k := len(lists)
	if k == 0 {
		return nil
	} else if k == 1 {
		return lists[0]
	} else {
		heap := NewMinHeap()
		var result *ListNode
		node := result
		for _, list := range lists {
			heap.Push(list)
		}
		for heap.length != 0 {
			tmp, err := heap.Pop()
			if err != nil {
				break
			}
			if node == nil {
				result = tmp
				node = tmp
			} else {
				node.Next = tmp
				node = node.Next
			}
			heap.Push(tmp.Next)
		}
		return result
	}
}

// 初始化小顶堆
type MinHeap struct {
	data   []*ListNode
	length int
}

func NewMinHeap() *MinHeap {
	return &MinHeap{data: []*ListNode{}, length: 0}
}

func (this *MinHeap) Pop() (*ListNode, error) {
	if this.length == 0 {
		return nil, errors.New("heap has no elements")
	} else if this.length == 1 {
		result := this.data[0]
		this.length--
		this.data = this.data[1:]
		return result, nil
	} else {
		result := this.data[0]
		this.data[0], this.data[this.length-1] = this.data[this.length-1], this.data[0]
		this.data = this.data[:this.length-1]
		this.length--
		this.data = minHeapifyFromUp(this.data, 0, this.length-1)
		return result, nil
	}
}

func (this *MinHeap) Push(num *ListNode) {
	if num == nil {
		return
	}
	this.data = append(this.data, num)
	this.length++
	this.data = minHeapifyFromDown(this.data, this.length-1, 0)
}

// 小顶堆自上向下堆化
func heapifyUp(nums []*ListNode, start, end int) []*ListNode {
	left := 2*start + 1
	for left <= end {
		tmp := left
		right := left + 1
		if right <= end && nums[right].Val < nums[tmp].Val {
			tmp = right
		}
		if nums[tmp].Val < nums[start].Val {
			nums[tmp], nums[start] = nums[start], nums[tmp]
			start = tmp
			left = start*2 + 1
		} else {
			break
		}
	}

	return nums
}

// 小顶堆自下向上堆化
func heapifyDown(nums []*ListNode, start, end int) []*ListNode {
	father := (start - 1) / 2
	for father >= end && father != start {
		if nums[start].Val < nums[father].Val {
			nums[father], nums[start] = nums[start], nums[father]
			start = father
			father = (start - 1) / 2
		} else {
			break
		}
	}

	return nums
}
