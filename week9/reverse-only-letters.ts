function reverseOnlyLetters(s: string): string {
  let temp = s.split("");
  let l = 0;
  let r = temp.length - 1;

  while (l < r) {
    while (/[a-z]/i.test(temp[l]) === false) l++;
    while (/[a-z]/i.test(temp[r]) === false) r--;
    if (l < r) {
      [temp[l], temp[r]] = [temp[r], temp[l]];
      l++;
      r--;
    }
  }

  return temp.join("");
}
