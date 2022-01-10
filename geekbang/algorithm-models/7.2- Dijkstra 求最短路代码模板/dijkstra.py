# Python
# https://www.acwing.com/problem/content/description/852/
from heapq import *


if __name__ == "__main__":
    n, m = map(int,input().split())

    ver = [[] for i in range(n + 1)] # 0~n
    edge = [[] for i in range(n + 1)] # 0~n
    dist = [1e9] * (n + 1)
    v = [False] * (n + 1)

    # 出边数组建图
    for i in range(m):
        x, y, z = map(int,input().split())
        ver[x].append(y)  # 另一端点
        edge[x].append(z) # 边权


    heap = []
    heappush(heap, (0, 1)) # (距离, 点)
    dist[1] = 0


    # Dijkstra 算法
    while heap:
        distance, x = heappop(heap)
        if v[x]:
            continue
        v[x] = True


        for i in range(len(ver[x])):
            y, z = ver[x][i], edge[x][i]
            if dist[y] > dist[x] + z:
                dist[y] = dist[x] + z
                heappush(heap, (dist[y], y))


    print(dist[n] if dist[n] != 1e9 else -1)
