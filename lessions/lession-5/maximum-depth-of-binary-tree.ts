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

/** 解法一 */
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/** ================================================================================================================================ */

/** 解法二 */
function maxDepth(root: TreeNode | null): number {
  let ans = 0;
  let depth = 1;
  function recur(root: TreeNode | null) {
    if (root === null) return;
    depth++;
    recur(root.left);
    recur(root.right);
    depth--;
    ans = Math.max(ans, depth);
  }
  recur(root);
  return ans;
}
