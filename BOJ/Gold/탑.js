function solution(n, arr) {
  const answer = Array(n).fill(0);
  const stack = [];
  const index = [];

  for (let i = n - 1; i >= 0; i--) {
    stack.push(arr[i]);
    index.push(i);
    let prev = i ? arr[i - 1] : 100000001;
    while (arr.length && stack[stack.length - 1] < prev) {
      stack.pop();
      let idx = index.pop();
      answer[idx] = i;
    }
  }

  console.log(answer.join(" "));
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
let arr = input[1]
  .trim()
  .split(" ")
  .map((item) => +item);

solution(n, arr);
