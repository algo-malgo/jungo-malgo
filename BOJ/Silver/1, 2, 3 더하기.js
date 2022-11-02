function solution(n, arr) {
  let answer = "";

  for (let i = 0; i < n; i++) {
    const dp = Array(arr[i] + 1);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let j = 4; j <= arr[i]; j++) {
      dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
    }

    answer += dp[arr[i]] + "\n";
  }

  console.log(answer);
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
