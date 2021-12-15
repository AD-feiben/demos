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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return;
  if (root.val === key) {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    let next = root.right;
    while (next.left) next = next.left;
    root.right = deleteNode(root.right, next.val);
    root.val = next.val;
    return root;
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }
  return root;
}
