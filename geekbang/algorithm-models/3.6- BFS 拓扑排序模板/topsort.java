// Java
// LeetCode210 课程表II


class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        // 初始化
        n = numCourses;
        edges = new ArrayList<List<Integer>>();
        inDeg = new int[n];
        for (int i = 0; i < n; i++) {
           edges.add(new ArrayList<Integer>());
           inDeg[i] = 0;
        }
        // 建图，加边
        for (int[] pre : prerequisites) {
            int ai = pre[0];
            int bi = pre[1];
            addEdge(bi, ai);
        }
        // 拓扑排序
        return topsort();
    }


    int[] topsort() {
        int[] order = new int[n];
        int m = 0;
        Queue<Integer> q = new LinkedList<Integer>();
        // 零入度点入队
        for (int i = 0; i < n; i++)
            if (inDeg[i] == 0) q.offer(i);
        while (!q.isEmpty()) {
            Integer x = q.poll();
            order[m] = x;
            m++;
            // 扩展每个点
            for (Integer y : edges.get(x)) {
                inDeg[y]--;
                if (inDeg[y] == 0) q.offer(y);
            }
        }
        // n个课程都进出过队列，说明可以完成
        if (m == n) return order;
        return new int[0];
    }


    private void addEdge(int x, int y) {
        edges.get(x).add(y);
        inDeg[y]++;
    }


    private int n;
    private List<List<Integer>> edges;
    private int[] inDeg;
}
