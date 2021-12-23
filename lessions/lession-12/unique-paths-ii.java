class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
      int m = obstacleGrid.length;
      int n = obstacleGrid[0].length;
      int[][] f = new int[m][n];

      for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
          if (obstacleGrid[i][j] == 1) f[i][j] = 0;
          else if (i == 0 && j == 0) f[i][j] = 1;
          else if (i == 0) f[i][j] = f[i][j - 1];
          else if (j == 0) f[i][j] = f[i - 1][j];
          else f[i][j] = f[i -1][j] + f[i][j - 1];
        }
      }
      return f[m - 1][n - 1];
    }
}