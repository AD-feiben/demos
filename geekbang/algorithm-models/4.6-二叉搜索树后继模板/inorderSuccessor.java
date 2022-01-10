/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        return findSucc(root, p.val);
    }


    private TreeNode findSucc(TreeNode root, int val) {
        TreeNode curr = root;
        TreeNode ans = null;
        while (curr != null) {
            if (curr.val > val) { // case2：当后继存在于经过的点中（找到一个>val的最小点）
                // 含义：ans=min(ans, curr.val);
                if (ans == null || ans.val > curr.val)
                    ans = curr;
            }
            if (curr.val == val) {
                if (curr.right != null) { // case1：检索到val且右子树存在，右子树一路向左
                    curr = curr.right;
                    while (curr.left != null) curr = curr.left;
                    return curr;
                }
                break;
            }
            if (val < curr.val) curr = curr.left;
            else curr = curr.right;
        }
        return ans;
    }


}
