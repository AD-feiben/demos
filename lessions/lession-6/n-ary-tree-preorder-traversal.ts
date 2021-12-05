/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

/** 解法一 */
function preorder(root: Node | null): number[] {
  function dfs(root) {
    if (root === null) return;
    ans.push(root.val);
    for (let child of root.children) {
      dfs(child);
    }
  }
  let ans = [];
  dfs(root);
  return ans;
}

/** 解法二 */
function preorder(root: Node | null): number[] {
  let ans = [];
  if (root === null) return ans;
  let stack = [];

  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    ans.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }

  return ans;
}
