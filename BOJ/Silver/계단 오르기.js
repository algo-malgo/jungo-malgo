function solution(n, s) {
  if (n === 1) return s[1];
  else if (n === 2) return s[1] + s[2];

  const dp = Array(n + 1);
  dp[1] = s[1];
  dp[2] = s[2];
  dp[3] = s[3];

  for (let i = 4; i <= n; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 3]) + s[i];
  }

  const sum = s.reduce((acc, cur) => acc + cur, 0);
  return sum - Math.min(dp[n - 1], dp[n - 2]);
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
const s = [0];
for (let i = 1; i <= n; i++) {
  s.push(+input[i].trim());
}

console.log(solution(n, s));
