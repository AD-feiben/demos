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
function levelOrder(root: Node | null): number[][] {
  let ans = [];

  function dfs(root, depth) {
    if (root === null) return;
    if (!ans[depth]) ans[depth] = [];
    ans[depth].push(root.val);
    for (let child of root.children) {
      dfs(child, depth + 1);
    }
  }

  dfs(root, 0);
  return ans;
}

/** 解法二 */
function levelOrder(root: Node | null): number[][] {
  let ans = [];
  if (root === null) return ans;

  /** [ [Node, depth], [Node, depth] ] */
  let q = [];
  q.push([root, 0]);

  while (q.length > 0) {
    let [root, depth] = q.shift();
    if (!ans[depth]) ans[depth] = [];
    ans[depth].push(root.val);
    for (let child of root.children) {
      q.push([child, depth + 1]);
    }
  }

  return ans;
}
