function reverseWords(s: string): string {
  let n = s.length;
  let temp = [];
  let words = "";
  let index = 0;
  while (index < n) {
    if (s.charAt(index) === " ") {
      if (words !== "") {
        temp.push(words);
        words = "";
      }
    } else {
      words += s.charAt(index);
    }
    index++;
  }
  if (words !== "") temp.push(words);
  temp.reverse();
  return temp.join(" ");
}

// * 题解做法
function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(" ");
}
