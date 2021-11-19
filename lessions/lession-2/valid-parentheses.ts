function isValid(s: string): boolean {
  let stack = [];
  for (let ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      let lastS = stack.pop();
      if (ch === ')' && lastS !== '(') return false;
      if (ch === ']' && lastS !== '[') return false;
      if (ch === '}' && lastS !== '{') return false;
    }
  }
  return stack.length === 0;
};