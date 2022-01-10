//C/C++
class Trie {
public:
    /** Initialize your data structure here. */
    Trie() {
        root = new Node();
    }


    /** Inserts a word into the trie. */
    void insert(string word) {
        find(word, true, true);
    }


    /** Returns if the word is in the trie. */
    bool search(string word) {
        return find(word, true, false);
    }


    /** Returns if there is any word in the trie that starts with the given prefix. */
    bool startsWith(string prefix) {
        return find(prefix, false, false);
    }


private:
    struct Node {
        int count;
        unordered_map<char, Node*> child;
        Node(): count(0) {}
    };
    Node* root;


    bool find(const string& s, bool exact_match, bool insert_if_not_exist) {
        Node* curr = root;
        for (char c : s) {
            if (curr->child.find(c) == curr->child.end()) {
                if (!insert_if_not_exist) return false;
                curr->child[c] = new Node();
            }
            curr = curr->child[c];
        }
        if (insert_if_not_exist) curr->count++;
        return exact_match ? curr->count > 0 : true;
    }
};
