/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  /** preorder[l1...r1] inorder[l2...r2] */
  function build(l1, r1, l2, r2) {
    if (l1 > r1) return null;
    let root = new TreeNode(preorder[l1]);
    let mid = l2;
    while (inorder[mid] !== root.val) mid++;
    // l2~mid-1 左子树中序
    // mid+1-r2 右子树中序
    root.left = build(l1 + 1, l1 + mid - l2, l2, mid - 1);
    root.right = build(l1 + mid - l2 + 1, r1, mid + 1, r2);
    return root;
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1);
}
