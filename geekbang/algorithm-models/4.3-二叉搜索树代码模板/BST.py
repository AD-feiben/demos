# Python


# 插入，保证val不存在
# 返回插入以后的新树
class Solution:
    def insertIntoBST(self, root: TreeNode, val: int) -> TreeNode:
        if root is None:
            return TreeNode(val)
        if val < root.val:
            root.left = self.insertIntoBST(root.left, val)
        else:
            root.right = self.insertIntoBST(root.right, val)
        return root


# 求val的后继
    def findSucc(self, root, val):
        ans = None
        while root:
            if val == root.val:
                if root.right:
                    p = root.right
                    while p.left:
                        p = p.left
                    return p
                break
            if root.val > val:
                if ans is None or ans.val > root.val:
                    ans = root
            if val < root.val:
                root = root.left
            else:
                root = root.right
        return ans


# 在以root为根的子树中删除key，返回新的根
    def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
        if root is None:
            return None
        if root.val == key:
            # 没有左子树，让right代替root的位置
            if root.left is None:
                return root.right
            # 没有右子树
            if root.right is None:
                return root.left
            # 找后继：右子树一路向左
            next = root.right
            while next.left:
                next = next.left
            root.right = self.deleteNode(root.right, next.val)
            root.val = next.val
            return root
        if key < root.val:
            root.left = self.deleteNode(root.left, key)
        else:
            root.right = self.deleteNode(root.right, key)
        return root
