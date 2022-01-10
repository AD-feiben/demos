class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        used = vector<bool>(nums.size(), false);
        find(nums, 0);
        return ans;
    }


    void find(vector<int>& nums, int count) {
        if (count == nums.size()) {
            ans.push_back(s);
            return;
        }
        for (int i = 0; i < nums.size(); i++)
            if (!used[i]) {
                used[i] = true;
                s.push_back(nums[i]);
                find(nums, count + 1);
                s.pop_back();
                used[i] = false;
            }
    }


private:
    vector<vector<int>> ans;
    vector<int> s;
    vector<bool> used;
};
