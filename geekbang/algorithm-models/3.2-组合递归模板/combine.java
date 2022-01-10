class Solution {
    public List<List<Integer>> combine(int n, int k) {
        ans = new ArrayList<List<Integer>>();
        s = new ArrayList<Integer>();
        this.n = n;
        this.k = k;
        findSubsets(1);
        return ans;
    }


    private void findSubsets(int index) {
        // 已经选了超过k个，
        // 或者把剩下的全选上也不够k个，退出
        if (s.size() > k || s.size() + n - index + 1 < k) return;
        if (index == n + 1) {
            ans.add(new ArrayList<Integer>(s));
            return;
        }
        findSubsets(index + 1);
        s.add(index);
        findSubsets(index + 1);
        s.remove(s.size() - 1);
    }


    private List<List<Integer>> ans;
    private List<Integer> s;
    private int n;
    private int k;
}
