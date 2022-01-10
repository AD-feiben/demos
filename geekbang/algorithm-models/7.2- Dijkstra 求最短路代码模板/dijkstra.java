// Java
// https://www.acwing.com/problem/content/description/852/
import java.io.*;
import java.util.*;


public class Main {
    public static void main(String args[]) throws Exception {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int m = input.nextInt();
        
        // 模板：出边数组初始化
        // 初态：[[], [], ... []]
        List<List<Integer>> ver = new ArrayList<List<Integer>>(); // 另一端点
        List<List<Integer>> edge = new ArrayList<List<Integer>>(); // 边权
        boolean[] v = new boolean[n + 1];
        int[] dist = new int[n + 1];
        for (int i = 0; i <= n; i++) {
            ver.add(new ArrayList<Integer>());
            edge.add(new ArrayList<Integer>());
            v[i] = false;
            dist[i] = (int)1e9;
        }


        for (int i = 1; i <= m; i++) {
            int x = input.nextInt();
            int y = input.nextInt();
            int z = input.nextInt();
            // 出边数组 addEdge 模板
            ver.get(x).add(y);
            edge.get(x).add(z);
        }
        
        // Dijkstra算法
        dist[1] = 0;
        // 堆，每个结点是长度为2的数组 [点，dist]
        PriorityQueue<int[]> q = new PriorityQueue<>((a,b) -> {return a[1] - b[1];});
        q.offer(new int[]{1, 0});
        while(!q.isEmpty()){
            int[] top = q.poll();
            int x = top[0];
            if (v[x]) continue;
            v[x] = true;
            for (int i = 0; i < ver.get(x).size(); i++) {
                int y = ver.get(x).get(i);
                int z = edge.get(x).get(i);
                if (dist[y] > dist[x] + z) {
                    dist[y] = dist[x] + z;
                    q.offer(new int[]{y, dist[y]});
                }
            }
        }
        System.out.println(dist[n] == 1e9 ? -1 : dist[n]);
    }
}
