class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        findSubsets(nums, 0);
        return ans;
    }


    void findSubsets(vector<int>& nums, int index) {
        if (index == nums.size()) {
            ans.push_back(s);
            return;
        }
        findSubsets(nums, index + 1);
        s.push_back(nums[index]);
        findSubsets(nums, index + 1);
        s.pop_back();
    }


private:
    vector<vector<int>> ans;
    vector<int> s;
};
