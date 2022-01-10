// Java


// 插入，保证val不存在
// 返回插入以后的新树根
TreeNode insertIntoBST(TreeNode root, int val) {
    if (root == null) {
        return new TreeNode(val);
    }
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
}


// 求val的后继
TreeNode findSucc(TreeNode root, int val) {
    TreeNode curr = root;
    TreeNode ans = null;
    while (curr != null) {
        if (curr.val > val) { // case2：当后继存在于经过的点中（找到一个>val的最小点）
            // 含义：ans=min(ans, curr.val);
            if (ans == null || ans.val > curr.val)
                ans = curr;
        }
        if (curr.val == val) {
            if (curr.right != null) { // case1：检索到val且右子树存在，右子树一路向左
                curr = curr.right;
                while (curr.left != null) curr = curr.left;
                return curr;
            }
            break;
        }
        if (val < curr.val) curr = curr.left;
        else curr = curr.right;
    }
    return ans;
}


// 在以root为根的子树中删除key，返回新的根
TreeNode deleteNode(TreeNode root, int key) {
    if (root == null) return null;
    if (root.val == key) {
        if (root.left == null) return root.right; // 没有左子树，让right代替root的位置
        if (root.right == null) return root.left; // 没有右子树
        TreeNode next = root.right;
        while (next.left != null) next = next.left; // 找后继：右子树一路向左
        root.right = deleteNode(root.right, next.val);
        root.val = next.val;
        return root;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }
    return root;
}
