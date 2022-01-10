# Python
# LeetCode 304 二维区域和检索 - 矩阵不可变
class NumMatrix:


    def __init__(self, matrix: List[List[int]]):
        self.sum = [[0] * len(matrix[0]) for i in range(len(matrix))]
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                self.sum[i][j] = self.getSum(i - 1, j) + self.getSum(i, j - 1) - self.getSum(i - 1, j - 1) + matrix[i][j]


    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.getSum(row2, col2) - self.getSum(row1 - 1, col2) - self.getSum(row2, col1 - 1) + self.getSum(row1 - 1, col1 - 1)


    def getSum(self, i, j):
        return self.sum[i][j] if i >= 0 and j >= 0 else 0
