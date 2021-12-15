# class Solution:
#     def sortArray(self, nums: List[int]) -> List[int]:
#       self.mergeSort(nums, 0, len(nums) - 1)
#       return nums

#     def mergeSort(self, nums: List[int], l: int, r: int):
#       if l >= r:
#         return
#       mid = (l + r) >> 1
#       self.mergeSort(nums, l, mid)
#       self.mergeSort(nums, mid + 1, r)
#       self.merge(nums, l, mid, r)

#     def merge(self, nums: List[int], l: int, mid: int, r: int):
#       # left [l, mid]
#       # right [mid + 1, r]
#       length = r - l + 1
#       temp = []
#       i = l
#       j = mid + 1
#       for k in range(length):
#         if (j > r or (i <= mid and nums[i] < nums[j])):
#           temp.append(nums[i])
#           i += 1
#         else:
#           temp.append(nums[j])
#           j += 1

#       nums[l:r+1] = temp



def mergesort(nums, left, right):
  if right <= left:
    return
  mid = (left+right) >> 1
  mergesort(nums, left, mid)
  mergesort(nums, mid+1, right)
  merge(nums, left, mid, right)


def merge(nums, left, mid, right):
  temp = []
  i = left
  j = mid+1
  while i <= mid and j <= right:
    if nums[i] <= nums[j]:
        temp.append(nums[i])
        i +=1
    else:
      temp.append(nums[j])
      j +=1
  while i<=mid:
    temp.append(nums[i])
    i +=1
  while j<=right:
    temp.append(nums[j])
    j +=1
  nums[left:right+1] = temp