// JavaScript
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = [0, {}]  // [count, child]
};


Trie.prototype.find = function(word, insertIfNotExist, exactMatch) {
    let curr = this.root
    for (let ch of word) {
        if (!(ch in curr[1])) {
            if (!insertIfNotExist)
                return false
            curr[1][ch] = [0, {}]
        }
        curr = curr[1][ch]
    }
    if (insertIfNotExist)
        curr[0] += 1
    return exactMatch ? curr[0] > 0 : true
};


/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    return this.find(word, true, false);
};


/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.find(word, false, true);
};


/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.find(prefix, false, false);
};


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
