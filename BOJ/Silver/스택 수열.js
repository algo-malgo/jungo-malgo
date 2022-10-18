function solution(n, arr) {
  let answer = "+\n";
  const stack = [1];
  let pos = 0;

  let i = 1;
  while (i <= n && stack.length) {
    if (stack[stack.length - 1] === arr[pos]) {
      stack.pop();
      answer += "-\n";
      pos += 1;
    } else {
      stack.push(++i);
      answer += "+\n";
    }

    if (!stack.length && i < n) {
      stack.push(++i);
      answer += "+\n";
    }
  }
  console.log(stack.length ? "NO" : answer);
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
