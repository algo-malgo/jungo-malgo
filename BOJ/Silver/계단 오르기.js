function solution(n, s) {
  if (n === 1) return s[1];

  const dp = Array.from({ length: n + 1 }, () => Array(3));
  dp[1][1] = s[1];
  dp[1][2] = 0;
  dp[2][1] = s[2];
  dp[2][2] = s[1] + s[2];

  for (let i = 3; i <= n; i++) {
    dp[i][1] = Math.max(dp[i - 2][1], dp[i - 2][2]) + s[i];
    dp[i][2] = dp[i - 1][1] + s[i];
  }

  return Math.max(dp[n][1], dp[n][2]);
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
