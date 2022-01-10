//C/C++


class LRUCache {
public:
    LRUCache(int capacity) : capacity(capacity) {
        head.next = &tail;
        tail.pre = &head;
    }

    int get(int key) {
        if (h.find(key) == h.end()) return -1;
        Node* item = h[key];
        removeFromList(item);
        insertToList(item);
        return item->value;
    }

    void put(int key, int value) {
        if (h.find(key) == h.end()) {
            Node* item = new Node();
            item->key = key, item->value = value;
            insertToList(item);
            h[key] = item;
        } else {
            Node* item = h[key];
            item->value = value;
            removeFromList(item);
            insertToList(item);
        }
        if (h.size() > capacity) {
            Node* node = tail.pre;
            removeFromList(node);
            h.erase(node->key);
            delete node;
        }
    }


private:
    struct Node {
        int key;
        int value;
        Node* pre;
        Node* next;
    };


    void removeFromList(Node* node) {
        node->pre->next = node->next;
        node->next->pre = node->pre;
    }


    void insertToList(Node* node) {
        head.next->pre = node;
        node->next = head.next;
        head.next = node;
        node->pre = &head;
    }


    int capacity;
    unordered_map<int, Node*> h;
    Node head, tail;
};
