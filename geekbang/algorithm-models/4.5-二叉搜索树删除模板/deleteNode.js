/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
// 在以root为根的子树中删除key，返回新的根
var deleteNode = function(root, key) {
    if (root == null) return null;
    if (root.val == key) {
        if (root.left == null) return root.right; // 没有左子树，让right代替root的位置
        if (root.right == null) return root.left; // 没有右子树
        let next = root.right;
        while (next.left != null) next = next.left; // 找后继：右子树一路向左
        root.right = deleteNode(root.right, next.val);
        root.val = next.val;
        return root;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }
    return root;
};
