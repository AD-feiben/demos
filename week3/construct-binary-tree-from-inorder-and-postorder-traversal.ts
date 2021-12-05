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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  /** inorder[l1...r1]  postorder[l2...r2] */
  function build(l1: number, r1: number, l2: number, r2: number) {
    if (l2 > r2) return null;
    let root = new TreeNode(postorder[r2]);
    let mid = l1;
    while (inorder[mid] !== root.val) mid++;
    // l1~mid-1 左子树中序
    // mid+1~r1 右子树中序
    root.left = build(l1, mid - 1, l2, l2 + mid - l1 - 1);
    root.right = build(mid + 1, r1, l2 + mid - l1, r2 - 1);
    return root;
  }

  return build(0, inorder.length - 1, 0, postorder.length - 1);
}
