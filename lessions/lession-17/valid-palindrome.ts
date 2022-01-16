function isPalindrome(s: string): boolean {
  // 1. 保留字母和数字，并转小写
  let t = "";
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) t += ch;
    else if (ch >= "A" && ch <= "Z") t += ch.toLowerCase();
  }

  let l = 0,
    r = t.length - 1;
  while (l < r) {
    if (t.charAt(l) !== t.charAt(r)) return false;
    l++, r--;
  }
  return true;
}

function isPalindrome(s: string): boolean {
  let n = s.length;

  function isNumOrLetter(ch: string) {
    return (
      (ch >= "a" && ch <= "z") ||
      (ch >= "0" && ch <= "9") ||
      (ch >= "A" && ch <= "Z")
    );
  }

  function getNext(i: number) {
    while (i < n && !isNumOrLetter(s.charAt(i))) i++;
    return i;
  }

  function getPre(j: number) {
    while (j > 0 && !isNumOrLetter(s.charAt(j))) j--;
    return j;
  }

  function equalsIgnoreCase(ch1: string, ch2: string) {
    return ch1.toLowerCase() === ch2.toLowerCase();
  }

  let l = getNext(0),
    r = getPre(s.length - 1);
  while (l < r) {
    if (!equalsIgnoreCase(s.charAt(l), s.charAt(r))) return false;
    l = getNext(l + 1);
    r = getPre(r - 1);
  }
  return true;
}
