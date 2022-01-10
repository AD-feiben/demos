// JavaScript


class DisjointSet {
    constructor(n) {
        this.fa = [];
        for (let i = 0; i < n; i++) this.fa[i] = i;
    }


    find(x) {
        if (x == this.fa[x]) return x;
        return this.fa[x] = this.find(this.fa[x]);
    }


    unionSet(x, y) {
        x = this.find(x);
        y = this.find(y);
        if (x != y) this.fa[x] = y;
    }
};
