// Java


public class LRUCache {


    private class Node {
        public int key;
        public int value;
        public Node pre;
        public Node next;
    };

    private HashMap<Integer, Node> map;
    // 保护结点
    private Node head;
    private Node tail;
    private int capacity;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<Integer, Node>();
        // 建立带有保护结点的空双向链表
        head = new Node();
        tail = new Node();
        head.next = tail;
        tail.pre = head;
    }

    public int get(int key) {
        if (!this.map.containsKey(key)) return -1;
        Node node = map.get(key);
        // 从链表和map中删掉
        this.removeFromList(node);
        // 重新插入到map、链表头部，维护时间顺序
        this.insertToListHead(node.key, node.value);
        return node.value;
    }

    public void put(int key, int value) {
        if (this.map.containsKey(key)) {
            Node node = this.map.get(key);
            // 从链表中删掉
            this.removeFromList(node);
            // 重新插入到头部，维护时间顺序
            this.insertToListHead(key, value);
        } else {
            // 在链表中插入新结点，返回新结点引用
            this.insertToListHead(key, value);
        }
        if (this.map.size() > this.capacity) {
            this.removeFromList(tail.pre);
        }
    }


    private void removeFromList(Node node) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
        this.map.remove(node.key);
    }


    private Node insertToListHead(int key, int value) {
        Node node = new Node();
        node.key = key;
        node.value = value;
        // node与head的下一个点之间建立联系
        node.next = head.next;
        head.next.pre = node;
        // node与head之间建立联系
        node.pre = head;
        head.next = node;
        // 建立映射关系
        this.map.put(key, node);
        return node;
    }
}
