// C/C++
// LeetCode 167 两数之和 - 输入有序数组
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int j = numbers.size() - 1;
        for (int i = 0; i < numbers.size(); i++) {
            while (i < j && numbers[i] + numbers[j] > target) j--;
            if (i < j && numbers[i] + numbers[j] == target) {
                return {i + 1, j + 1};
            }
        }
        return {};
    }
/*
    for i = 0 ~ n - 1
        for j = i + 1 ~ n - 1
            if (numbers[i] + numbers[j] == target)
                return ...
    固定i，找到j使得 numbers[j] = target - numbers[i]
    移动i，j怎么变？
    i增大，j单调减小
*/
};
