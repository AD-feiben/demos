// JavaScript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else {
      if (this.cache.size >= this.capacity) {
        // Map 中新 set 的元素会放在后面
        let firstKey = this.cache.keys().next();
        this.cache.delete(firstKey.value);
      }
    }
    this.cache.set(key, value);
  }
}
