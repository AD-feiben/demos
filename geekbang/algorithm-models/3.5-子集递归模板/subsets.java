class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        ans = new ArrayList<List<Integer>>();
        s = new ArrayList<Integer>();
        findSubsets(nums, 0);
        return ans;
    }


    private void findSubsets(int[] nums, int index) {
        if (index == nums.length) {
            ans.add(new ArrayList<Integer>(s));
            return;
        }
        findSubsets(nums, index + 1);
        s.add(nums[index]);
        findSubsets(nums, index + 1);
        s.remove(s.size() - 1);
    }


    private List<List<Integer>> ans;
    private List<Integer> s;
}
