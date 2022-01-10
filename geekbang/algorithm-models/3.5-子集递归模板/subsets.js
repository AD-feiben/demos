/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var ans = []
    var s = []
    var findSubsets = function(index) {
        if (index == nums.length) {
            ans.push(s.slice())
            return
        }
        findSubsets(index + 1)
        s.push(nums[index])
        findSubsets(index + 1)
        s.pop()
    }
    findSubsets(0)
    return ans
};
