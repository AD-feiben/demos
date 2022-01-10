/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    var findSucc = function(root, val) {
        let ans = null;
        while (root != null) {
            if (val == root.val) {
                if (root.right != null) {
                    let p = root.right;
                    while (p.left != null) p = p.left;
                    return p;
                }
                break;
            }
            if (root.val > val && (ans == null || ans.val > root.val))
                ans = root;
            if (val < root.val) root = root.left; else root = root.right;
        }
        return ans;
    }


    return findSucc(root, p.val);
};
