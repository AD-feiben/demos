class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
      int m = triangle.size();
      int[][] f = new int[m][m];

      f[0][0] = triangle.get(0).get(0);
      for (int i = 1; i < m; i++) {
        f[i][0] = triangle.get(i).get(0) + f[i - 1][0];

        for (int j = 1; j < i; j++) {
          f[i][j] = triangle.get(i).get(j) + Math.min(f[i - 1][j], f[i - 1][j - 1]);
        }

        f[i][i] = triangle.get(i).get(i) + f[i - 1][i - 1];
      }

      int ans = f[m - 1][0];
      for (int i = 1; i < m; i++) {
        ans = Math.min(ans, f[m - 1][i]);
      }
      return ans;
    }
}