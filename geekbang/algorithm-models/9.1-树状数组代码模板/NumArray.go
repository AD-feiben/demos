package main

type NumArray struct {
	data []int
}

func Constructor(nums []int) NumArray {
	a := NumArray{
		data: make([]int, len(nums)+1),
	}
	for i := range nums {
		a.Update(i, nums[i])
	}
	return a
}

func (this *NumArray) Update(index int, val int) {
	x := this.SumRange(index, index)
	index++
	for index < len(this.data) {
		this.data[index] += val - x
		index += index & (-index)
	}
}

func (this *NumArray) SumRange(left int, right int) int {
	right++
	l, r := 0, 0
	for left > 0 {
		l += this.data[left]
		left -= left & (-left)
	}
	for right > 0 {
		r += this.data[right]
		right -= right & (-right)
	}
	return r - l
}
