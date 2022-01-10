# Python
class Trie:


    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = [0, {}]  # [count, child]


    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        self.find(word, True, True)


    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        return self.find(word, True, False)


    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        return self.find(prefix, False, False)

    def find(self, s, exact_match, insert_if_not_exist):
        curr = self.root
        for ch in s:
            if ch not in curr[1]:
                if not insert_if_not_exist:
                    return False
                curr[1][ch] = [0, {}]
            curr = curr[1][ch]
        if insert_if_not_exist:
            curr[0] += 1
        return curr[0] > 0 if exact_match else True


