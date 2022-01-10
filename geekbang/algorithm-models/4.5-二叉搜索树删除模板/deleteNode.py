# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
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
