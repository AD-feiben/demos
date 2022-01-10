package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderSuccessor(root *TreeNode, p *TreeNode) *TreeNode {
	return findSucc(root, p.Val)
}

func findSucc(root *TreeNode, val int) *TreeNode {
	var ans *TreeNode
	for root != nil {
		if val == root.Val {
			if root.Right != nil {
				p := root.Right
				for p.Left != nil {
					p = p.Left
				}
				return p
			}
			break
		}
		if root.Val > val && (ans == nil || ans.Val > root.Val) {
			ans = root
		}
		if val < root.Val {
			root = root.Left
		} else {
			root = root.Right
		}
	}
	return ans
}
