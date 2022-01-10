// C/C++
// LeetCode 304 二维区域和检索 - 矩阵不可变
class NumMatrix {
public:
    NumMatrix(vector<vector<int>>& matrix) {
        sum.clear();
        for (int i = 0; i < matrix.size(); i++) {
            sum.push_back({});
            for (int j = 0; j < matrix[i].size(); j++)
                sum[i].push_back(get_sum(i - 1, j) + get_sum(i, j - 1) - get_sum(i - 1, j - 1) + matrix[i][j]);
        }
    }

    int sumRegion(int row1, int col1, int row2, int col2) {
        return get_sum(row2, col2) - get_sum(row1 - 1, col2) - get_sum(row2, col1 - 1) + get_sum(row1 - 1, col1 - 1);
    }


private:
    int get_sum(int i, int j) {
        if (i >= 0 && j >= 0) return sum[i][j];
        return 0;
    }


    vector<vector<int>> sum;
};
