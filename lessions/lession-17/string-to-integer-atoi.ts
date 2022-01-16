function myAtoi(s: string): number {
  let len = s.length;
  let index = 0;
  while (index < len && s.charAt(index) === ' ') index++;

  let sign = 1;
  if (index < len && (s.charAt(index) === '+' || s.charAt(index) === '-')) {
    sign = s.charAt(index) === '+' ? 1 : -1;
    index++;
  }

  let val = 0;
  while (index < len && s.charAt(index) >= '0' && s.charAt(index) <= '9') {
    // val * 10 + Number(s.charAt(index)) > 2147483648 移项
    if (val > (2147483647 - Number(s.charAt(index))) / 10) {
      if (sign === -1) return -2147483648;
      return 2147483647;
    }
    val = val * 10 + Number(s.charAt(index));
    index++;
  }
  return val * sign;
};