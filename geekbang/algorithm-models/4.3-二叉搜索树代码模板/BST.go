package main

// Golang

// 插入，保证val不存在
// 返回插入以后的新树根
func insertIntoBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return &TreeNode{Val: val}
	}
	if val < root.Val {
		root.Left = insertIntoBST(root.Left, val)
	} else {
		root.Right = insertIntoBST(root.Right, val)
	}
	return root
}

// 求val的后继
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

// 在以root为根的子树中删除key，返回新的根
func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}
	if root.Val == key {
		if root.Left == nil {
			return root.Right // 没有左子树，让right代替root的位置
		}
		if root.Right == nil {
			return root.Left // 没有右子树
		}
		next := root.Right
		for next.Left != nil {
			next = next.Left // 找后继：右子树一路向左
		}
		root.Right = deleteNode(root.Right, next.Val)
		root.Val = next.Val
		return root
	}
	if key < root.Val {
		root.Left = deleteNode(root.Left, key)
	} else {
		root.Right = deleteNode(root.Right, key)
	}
	return root
}
