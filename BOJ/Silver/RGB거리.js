function solution(n, c) {
  const dp = Array.from({ length: n + 1 }, () => Array(3));
  dp[1][0] = c[1][0];
  dp[1][1] = c[1][1];
  dp[1][2] = c[1][2];
  
  for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + c[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + c[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + c[i][2];
  }

  return Math.min(...dp[n])
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
const c = [[0, 0, 0]];
for (let i = 1; i <= n; i++) {
  c.push(
    input[i]
      .trim()
      .split(" ")
      .map((e) => +e)
  );
}

console.log(solution(n, c));
