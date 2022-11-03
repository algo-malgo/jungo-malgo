function solution(k) {
  if (k === m) return arr.join(" ");

  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (!isUsed[i]) {
      arr[k] = i;
      isUsed[i] = true;
      answer.push(solution(k + 1, n, m));
      isUsed[i] = false;
    }
  }
  return answer.join("\n");
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
)
  .trim()
  .split(" ")
  .map((e) => +e);

const [n, m] = input;
const arr = Array.from({ length: m }, () => 0);
const isUsed = Array.from({ length: n + 1 }, () => false);

console.log(solution(0));
