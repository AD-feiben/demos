let stack: number[] = [];

function isOp(token: string) {
  if (token === "+") return true;
  if (token === "-") return true;
  if (token === "*") return true;
  if (token === "/") return true;
  return false;
}

function calc(x: number, y: number, token: string) {
  if (token === "+") return x + y;
  if (token === "-") return x - y;
  if (token === "*") return x * y;
  if (token === "/") return Math.trunc(x / y);
}

function evalRPN(tokens: string[]): number {
  for (let token of tokens) {
    if (isOp(token)) {
      let y = stack.pop();
      let x = stack.pop();
      let res = calc(x, y, token);
      stack.push(res);
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
}
