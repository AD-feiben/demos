// JavaScript
// LeetCode 167 两数之和 - 输入有序数组
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let j = numbers.length - 1;
    for (let i = 0; i < numbers.length; i++) {
        while (i < j && numbers[i] + numbers[j] > target) j--;
        if (i < j && numbers[i] + numbers[j] == target) {
            return [i + 1, j + 1];
        }
    }
    return [];
};
