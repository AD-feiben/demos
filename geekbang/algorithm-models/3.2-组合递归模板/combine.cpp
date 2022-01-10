class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        this->n = n;
        this->k = k;
        findSubsets(1);
        return ans;
    }


    void findSubsets(int index) {
        // 已经选了超过k个，
        // 或者把剩下的全选上也不够k个，退出
        if (s.size() > k || s.size() + n - index + 1 < k) return;
        if (index == n + 1) {
            ans.push_back(s);
            return;
        }
        findSubsets(index + 1);
        s.push_back(index);
        findSubsets(index + 1);
        s.pop_back();
    }


private:
    vector<vector<int>> ans;
    vector<int> s;
    int n;
    int k;
};
