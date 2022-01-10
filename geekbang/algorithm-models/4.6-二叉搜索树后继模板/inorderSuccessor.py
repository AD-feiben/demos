# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def inorderSuccessor(self, root: TreeNode, p: TreeNode) -> TreeNode:
        return self.findSucc(root, p.val)


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
