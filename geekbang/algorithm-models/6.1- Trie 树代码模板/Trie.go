package main

// Golang

type Trie struct {
	root *node
}

/** Initialize your data structure here. */
func Constructor() Trie {
	return Trie{root: &node{child: make(map[uint8]*node)}}
}

/** Inserts a word into the trie. */
func (this *Trie) Insert(word string) {
	this.find(word, true, true)
}

/** Returns if the word is in the trie. */
func (this *Trie) Search(word string) bool {
	return this.find(word, true, false)
}

/** Returns if there is any word in the trie that starts with the given prefix. */
func (this *Trie) StartsWith(prefix string) bool {
	return this.find(prefix, false, false)
}

type node struct {
	count int
	child map[uint8]*node
}

func (this *Trie) find(s string, exactMatch, insertIfNotExist bool) bool {
	curr := this.root
	for i := 0; i < len(s); i++ {
		c := s[i]
		if _, ok := curr.child[c]; !ok {
			if !insertIfNotExist {
				return false
			}
			curr.child[c] = &node{child: make(map[uint8]*node)}
		}
		curr = curr.child[c]
	}
	if insertIfNotExist {
		curr.count++
	}
	return !exactMatch || curr.count > 0
}

/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
