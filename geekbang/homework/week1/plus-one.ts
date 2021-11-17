function plusOne(digits: number[]): number[] {
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      ++digits[i];
      for (let j = i + 1; j < n; j++) {
        digits[j] = 0;
      }
      return digits;
    }
  }

  let ans = new Array(n + 1).fill(0);
  ans[0] = 1;
  return ans;
}
