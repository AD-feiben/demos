保序操作模型，过滤器思想

if 条件不同



n < i 的情况，正序操作

```js
let n = 0;
for (let i = 0; i < nums.length; i++) {
  if () {
    nums[n] = nums[i];
    n++;
  }
}
```

n > i 的情况，倒序操作

参考[merge-sorted-array](./merge-sorted-array.ts)
