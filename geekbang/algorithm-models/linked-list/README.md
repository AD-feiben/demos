链表操作模型

```js
let last = null; // xxx
while (head !== null) {
  const nextNode = head.next;
  // xxx执行操作
  // last = xxx;
  head = nextNode;
}
```