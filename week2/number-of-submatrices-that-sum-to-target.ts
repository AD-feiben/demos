function subarraySum(nums: number[], k: number): number {
  let n = nums.length;
  let s = new Array(n + 1);
  s[0] = 0;
  for (let i = 1; i <= n; i++) s[i] = s[i - 1] + nums[i - 1];

  let preCountMap = new Map();
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    let target = s[i] - k;
    if (preCountMap.has(target)) {
      ans += preCountMap.get(target);
    }

    preCountMap.set(s[i], (preCountMap.get(s[i]) || 0) + 1);
  }
  return ans;
}

function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  let ans = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    let sum = new Array(n).fill(0);
    for (let j = i; j < m; j++) {
      for (let c = 0; c < n; c++) {
        sum[c] += matrix[j][c];
      }
      ans += subarraySum(sum, target);
    }
  }
  return ans;
}
