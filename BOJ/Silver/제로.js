function solution(n, arr) {
  const stack = [];

  for (let i = 0; i < n; i++) {
    if (arr[i]) stack.push(arr[i]);
    else stack.pop();
  }

  console.log(stack.reduce((acc, cur) => acc + cur, 0));
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
)
  .trim()
  .split("\n");

const n = +input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(+input[i].trim());
}

solution(n, arr);
