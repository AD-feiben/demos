/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ans = [];
    var s = [];
    var used = [];
    var find = function(index) {
        if (index == nums.length) {
            ans.push(s.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++)
            if (!used[i]) {
                used[i] = true;
                s.push(nums[i]);
                find(index + 1);
                s.pop();
                used[i] = false;
            }
    };
    find(0);
    return ans;
};
