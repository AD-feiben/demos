// C/C++
// https://www.acwing.com/problem/content/description/852/
#include<bits/stdc++.h>
using namespace std;
const int MAX_N = 150005, MAX_M = 150005;
vector<int> ver[MAX_N]; // 出边数组 - 另一端点
vector<int> edge[MAX_N]; // 出边数组 - 边权
int n, m, d[MAX_N];
bool v[MAX_N];
// pair<-dist[x], x>
priority_queue<pair<int, int>> q;


// 插入一条从x到y长度z的有向边
void add(int x, int y, int z) {
    ver[x].push_back(y);
    edge[x].push_back(z);
}


int main() {
    cin >> n >> m;
    for (int i = 1; i <= m; i++) {
        int x, y, z;
        scanf("%d%d%d", &x, &y, &z);
        add(x, y, z);
    }
    memset(d, 0x7f, sizeof(d));
    d[1] = 0;
    q.push(make_pair(0, 1));
    while (!q.empty()) {
        int x = q.top().second;
        q.pop();
        if (v[x]) continue;
        v[x] = true;
        for (int i = 0; i < ver[x].size(); i++) {
            int y = ver[x][i], z = edge[x][i];
            if (d[y] > d[x] + z) {
                d[y] = d[x] + z;
                q.push(make_pair(-d[y], y));
            }
        }
    }
    if (d[n] == 0x7f7f7f7f) puts("-1");
    else cout << d[n] << endl;
}
