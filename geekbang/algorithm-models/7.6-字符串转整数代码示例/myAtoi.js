// JavaScript
function myAtoi(str) {
  let index = 0;
  let sign = 1;
  let total = 0;
  // 1. Empty String
  if (str.length === 0) return 0;


  // 2. trim
  while (str[index] === " " && index < str.length) {
    index++;
  }


  // 3. get sign
  if (str[index] === "+" || str[index] === "-") {
    sign = str[index] === "+" ? 1 : -1;
    index++;
  }


  // 4. covert
  while (index < str.length) {
    let digit = str[index].codePointAt(0) - "0".codePointAt(0);
    if (digit < 0 || digit > 9) break;
    total = total * 10 + digit;
    index++;
  }


  if (sign * total > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else {
  }


  return Math.max(Math.min(sign * total, 2 ** 31 - 1), -(2 ** 31)
