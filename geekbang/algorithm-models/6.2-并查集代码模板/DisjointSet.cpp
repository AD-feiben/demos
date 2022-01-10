//C/C++
class DisjointSet {
public:
    DisjointSet(int n) {
        fa = vector<int>(n, 0);
        for (int i = 0; i < n; i++) fa[i] = i;
    }


    int find(int x) {
        if (x == fa[x]) return x;
        return fa[x] = find(fa[x]);
    }


    void unionSet(int x, int y) {
        x = find(x), y = find(y);
        if (x != y) fa[x] = y;
    }


private:
    vector<int> fa;
};
