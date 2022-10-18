function solution(n, arr) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    count += stack.length;
    stack.push(arr[i]);
    let next = i != n - 1 ? arr[i + 1] : 1000000001;
    while (stack[stack.length - 1] <= next) {
      stack.pop();
    }
  }

  console.log(count);
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
