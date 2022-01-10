//Java
import java.util.HashMap;
class Trie {
    /** Initialize your data structure here. */
    public Trie() {
        root = new Node();
    }


    /** Inserts a word into the trie. */
    public void insert(String word) {
        find(word, true, true);
    }


    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        return find(word, true, false);
    }


    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        return find(prefix, false, false);
    }


    class Node {
        public int count;
        public HashMap<Character, Node> child;
        public Node() { count = 0; child = new HashMap<>(); }
    }
    Node root;


    boolean find(String s, boolean exact_match, boolean insert_if_not_exist) {
        Node curr = root;
        for (Character c : s.toCharArray()) {
            if (!curr.child.containsKey(c)) {
                if (!insert_if_not_exist) return false;
                curr.child.put(c, new Node());
            }
            curr = curr.child.get(c);
        }
        if (insert_if_not_exist) curr.count++;
        return exact_match ? curr.count > 0 : true;
    }
}
