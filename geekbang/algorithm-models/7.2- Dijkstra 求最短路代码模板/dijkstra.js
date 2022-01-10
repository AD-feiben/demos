/* JavaScript */
// https://www.acwing.com/problem/content/description/852/
class BinaryHeap {
    constructor() {
        // 数组存储完全二叉树
        // 从索引0开始存
        this.heap = [];
    }


    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }


    isEmpty() {
        return this.heap.length == 0;
    }


    push(node) {
        // 插入到尾部
        this.heap.push(node);
        // 向上调整
        this.heapifyUp(this.heap.length - 1);
    }


    pop() {
        let ans = this.heap[0];
        // 末尾交换到头部，然后删除末尾
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        // 向下调整
        this.heapifyDown(0);
        return ans;
    }


    heapifyUp(p) {
        while (p > 0) {
            let fa = (p - 1) >> 1;  // 右移1位，等于整除2
            if (this.heap[p].key < this.heap[fa].key) { // 小根堆
                this.swap(p, fa);
                p = fa;
            }
            else break;
        }
    }


    heapifyDown(p) {
        let child = p * 2 + 1;
        while (child < this.heap.length) {  // child未出界，说明p有合法的child，还不是叶子
            let otherChild = p * 2 + 2;
            // 先比较两个孩子，谁小就继续跟p比较
            // child存较小的孩子
            if (otherChild < this.heap.length && this.heap[child].key > this.heap[otherChild].key)
                child = otherChild;
            // 让child跟p比较
            if (this.heap[p].key > this.heap[child].key) { // 小根堆
                this.swap(p, child);
                p = child;
                child = p * 2 + 1;
            }
            else break;
        }
    }
};


let n, m;
// 出边数组
let ver = []; // 另一端点
let edge = []; // 边权


let addEdge = (x, y, z) => {
    ver[x].push(y);
    edge[x].push(z);
}


// Dijkstra算法
let dijkstra = () => {
    let dist = [];
    let v = []
    for (let i = 1; i <= n; i++) {
        dist[i] = 1e9;
        v[i] = false;
    }
    dist[1] = 0;
    let q = new BinaryHeap();
    q.push({key: 0, vertex: 1}); // 距离作为key
    while (!q.isEmpty()) {
        let x = q.pop().vertex;
        if (v[x]) continue;
        v[x] = true;
        for (let i = 0; i < ver[x].length; i++) {
            let y = ver[x][i];
            let z = edge[x][i];
            if (dist[y] > dist[x] + z) {
                dist[y] = dist[x] + z;
                q.push({key: dist[y], vertex: y});
            }
        }
    }
    if (dist[n] === 1e9) return -1;
    return dist[n];
}


// 处理读入
let buf = '';
process.stdin.on('readable', function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});
let getInputNums = line => line.split(' ').filter(s => s !== '').map(x => parseInt(x));
let getInputStr = line => line.split(' ').filter(s => s !== '');


process.stdin.on('end', function () {
    buf.split('\n').forEach(function (line, lineIdx) {
        if (lineIdx === 0) {
            n = getInputNums(line)[0];
            m = getInputNums(line)[1];
            for (let i = 1; i <= n; i++) {
                ver[i] = [];
                edge[i] = [];
            }
        } else if (lineIdx <= m) {
            let arr = getInputNums(line);
            let x = arr[0];
            let y = arr[1];
            let z = arr[2];
            addEdge(x, y, z);
            if (lineIdx === m) {
                console.log(dijkstra());
            }
        }
    });
});


