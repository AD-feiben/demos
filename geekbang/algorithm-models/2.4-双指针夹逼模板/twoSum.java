// Java
// LeetCode 167 两数之和 - 输入有序数组
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int j = numbers.length - 1;
        for (int i = 0; i < numbers.length; i++) {
            while (i < j && numbers[i] + numbers[j] > target) j--;
            if (i < j && numbers[i] + numbers[j] == target) {
                return new int[]{i + 1, j + 1};
            }
        }
        return null;
    }
}
