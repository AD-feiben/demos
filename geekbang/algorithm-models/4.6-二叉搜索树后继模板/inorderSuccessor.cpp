/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        return find(root, p->val);
    }


    TreeNode* find(TreeNode* root, int val) {
        TreeNode* ans = nullptr;
        while (root != nullptr) {
            if (val == root->val) {
                if (root->right != nullptr) {
                    TreeNode* p = root->right;
                    while (p->left != nullptr) p = p->left;
                    return p;
                }
                break;
            }
            if (root->val > val && (ans == nullptr || ans->val > root->val))
                ans = root;
            if (val < root->val) root = root->left; else root = root->right;
        }
        return ans;
    }
};
