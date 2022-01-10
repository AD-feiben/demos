# Python
# LeetCode 167 两数之和 - 输入有序数组
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        j = len(numbers) - 1
        for i in range(len(numbers)):
            while i < j and numbers[i] + numbers[j] > target:
                j -= 1
            if i < j and numbers[i] + numbers[j] == target:
                return [i + 1, j + 1]
        return
