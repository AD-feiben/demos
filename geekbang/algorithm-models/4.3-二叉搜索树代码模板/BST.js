// JavaScript


// 插入，保证val不存在
// 返回插入以后的新树根
var insertIntoBST = function(root, val) {
    if (root == null) return new TreeNode(val);
    if (val < root.val)
        root.left = insertIntoBST(root.left, val);
    else
        root.right = insertIntoBST(root.right, val);
    return root;
};


// 求val的后继
var findSucc = function(root, val) {
    let ans = null;
    while (root != null) {
        if (val == root.val) {
            if (root.right != null) {
                let p = root.right;
                while (p.left != null) p = p.left;
                return p;
            }
            break;
        }
        if (root.val > val && (ans == null || ans.val > root.val))
            ans = root;
        if (val < root.val) root = root.left; else root = root.right;
    }
    return ans;
}


// 在以root为根的子树中删除key，返回新的根
var deleteNode = function(root, key) {
    if (root == null) return null;
    if (root.val == key) {
        if (root.left == null) return root.right; // 没有左子树，让right代替root的位置
        if (root.right == null) return root.left; // 没有右子树
        let next = root.right;
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
};
