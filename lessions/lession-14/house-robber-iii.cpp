/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int rob(TreeNode* root) {
      f[nullptr] = vector<int>(2, 0);
      dfs(root);
      return max(f[root][0], f[root][1]);
    }
private:
    unordered_map<TreeNode*, vector<int>> f;
    void dfs(TreeNode* root) {
      if (root == nullptr) return;
      f[root] = vector<int>(2);
      dfs(root->left);
      dfs(root->right);

      f[root][0] = max(f[root->left][0], f[root->left][1]) + max(f[root->right][0], f[root->right][1]);
      f[root][1] = f[root->left][0] + f[root->right][0] + root->val;
    }
};
