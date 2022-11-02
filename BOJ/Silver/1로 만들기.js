function solution(n) {
  const arr = Array(n + 1);
  arr[1] = 0;

  for (let i = 2; i <= n; i++) {
    const calc = [];
    if (i % 3 === 0) calc.push(arr[i / 3] + 1);
    if (i % 2 === 0) calc.push(arr[i / 2] + 1);
    calc.push(arr[i - 1] + 1);
    arr[i] = Math.min(...calc);
  }

  console.log(arr[n]);
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
).trim();

solution(+input);
