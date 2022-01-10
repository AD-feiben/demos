// C/C++


// 插入，保证val不存在
// 返回插入以后的新树根
TreeNode* insertIntoBST(TreeNode* root, int val) {
    if (root == nullptr) {
        return new TreeNode(val);
    }
    if (val < root->val) {
        root->left = insertIntoBST(root->left, val);
    } else {
        root->right = insertIntoBST(root->right, val);
    }
    return root;
}


// 求val的后继
TreeNode* findSucc(TreeNode* root, int val) {
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


// 在以root为根的子树中删除key，返回新的根
TreeNode* deleteNode(TreeNode* root, int key) {
    if (root == nullptr) return nullptr;
    if (root->val == key) {
        if (root->left == nullptr) return root->right; // 没有左子树，让right代替root的位置
        if (root->right == nullptr) return root->left; // 没有右子树
        TreeNode* next = root->right;
        while (next->left != nullptr) next = next->left; // 找后继：右子树一路向左
        root->right = deleteNode(root->right, next->val);
        root->val = next->val;
        return root;
    }
    if (key < root->val) {
        root->left = deleteNode(root->left, key);
    } else {
        root->right = deleteNode(root->right, key);
    }
    return root;
}
