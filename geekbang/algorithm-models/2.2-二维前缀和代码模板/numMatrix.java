// Java
// LeetCode 304 二维区域和检索 - 矩阵不可变
class NumMatrix {


    public NumMatrix(int[][] matrix) {
        sum = new int[matrix.length][matrix[0].length];
        for (int i = 0; i < matrix.length; i++)
            for (int j = 0; j < matrix[i].length; j++)
                sum[i][j] = get_sum(i - 1, j) + get_sum(i, j - 1) - get_sum(i - 1, j - 1) + matrix[i][j];
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
        return get_sum(row2, col2) - get_sum(row1 - 1, col2) - get_sum(row2, col1 - 1) + get_sum(row1 - 1, col1 - 1);
    }


    private int get_sum(int i, int j) {
        if (i >= 0 && j >= 0) return sum[i][j];
        return 0;
    }


    private int[][] sum;
}
