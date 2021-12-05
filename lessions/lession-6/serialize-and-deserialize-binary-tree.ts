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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let arr = [];

  function dfs(root) {
    if (root === null) {
      arr.push('null');
      return;
    }
    arr.push(String(root.val));
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return arr.join(',');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  console.log(data);
  let arr = data.split(',');
  let curr = 0;

  function restore() {
    if (arr[curr] === 'null') {
      curr++;
      return null;
    }
    let root = new TreeNode(Number(arr[curr]));
    curr++;
    root.left = restore();
    root.right = restore();
    return root;
  }
  return restore();
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */