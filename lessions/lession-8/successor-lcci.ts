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
var inorderSuccessor = function (root, p) {
  return getNext(root, p.val);
};

function getNext(root, val) {
  let ans = null;
  let curr = root;

  while (curr !== null) {
    if (curr.val === val) {
      if (curr.right !== null) {
        ans = curr.right;
        while (ans.left) ans = ans.left;
        break;
      }
    }
    if (curr.val > val) {
      if (ans === null || curr.val < ans.val) ans = curr;
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
  return ans;
}
