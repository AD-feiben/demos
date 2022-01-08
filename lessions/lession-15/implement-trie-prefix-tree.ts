class TrieNode {
  count: number;
  child: Map<string, TrieNode>;
  constructor() {
    this.count = 0;
    this.child = new Map();
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    this.find(word, true, false);
  }

  search(word: string): boolean {
    return this.find(word, false, false);
  }

  startsWith(prefix: string): boolean {
    return this.find(prefix, false, true);
  }

  find(word: string, isInsert: boolean, isPrefix: boolean): boolean {
    let curr = this.root;
    for (let ch of word.split("")) {
      if (curr.child.has(ch) === false) {
        if (isInsert === false) return false;
        curr.child.set(ch, new TrieNode());
      }
      curr = curr.child.get(ch);
    }
    if (isInsert) curr.count++;
    if (isPrefix) return true;
    return curr.count > 0;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
