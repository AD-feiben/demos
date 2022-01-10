// JavaScript
const mergeSort = (nums) => {
  if (nums.length <= 1) return nums
  let mid = Math.floor(nums.length/2),
      left = nums.slice(0, mid),
      right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}


const merge = (left, right) => {
  let result = []
  while(left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  while(left.length) result.push(left.shift())
  while(right.length) result.push(right.shift())
  return result
}
