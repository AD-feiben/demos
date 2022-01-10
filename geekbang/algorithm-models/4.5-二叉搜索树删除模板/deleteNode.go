package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func deleteNode(root *TreeNode, low int, high int) *TreeNode {
	if root == nil {
		return nil
	}
	if root.val == key {
		if root.left == nil {
			return root.right
		}
		if root.right == nil {
			return root.left
		}
		TreeNode * next = root.right
		for next.left != nil {
			next = next.left
		}
		root.right = deleteNode(root.right, next.val)
		root.val = next.val
		return root
	}
	if key < root.val {
		root.left = deleteNode(root.left, key)
	} else {
		root.right = deleteNode(root.right, key)
	}
	return root
}
