/** https://www.acwing.com/problem/content/147/ */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = -1;
// [pi, di]
let a = [];
let fa = new Array(10001).fill(0);

function find(x) {
  if (fa[x] === x) return x;
  fa[x] = find(fa[x]);
  return fa[x];
}

rl.on("line", function (data) {
  if (data.trim() !== "") {
    data = data.trim().split(/\s+/);
    if (n === -1) n = +data.shift();
    while (data.length > 0) a.push([+data.shift(), +data.shift()]);
    if (a.length === n) {
      resolve(n, a);
      n = -1;
      a = [];
    }
  }
});

function resolve(n, a) {
  let ans = 0;
  a.sort((item1, item2) => item1[0] - item2[0]);
  for (let i = 0; i <= 10000; i++) fa[i] = i;
  for (let i = n - 1; i >= 0; i--) {
    let [profit, day] = a[i];
    let lastAvaliableDay = find(day);
    if (lastAvaliableDay > 0) {
      ans += profit;
      fa[lastAvaliableDay] = lastAvaliableDay - 1;
    }
  }
  console.log(ans);
}
