function solution(n, arr) {
  let answer = 0;
  let s = [];
  for (let i = 0; i < n; i++) {
    const now = arr[i];

    let count = 1; 
    while (s.length > 0 && s[s.length - 1].value <= now) {
      answer += s[s.length - 1].count;
      count = s[s.length - 1].value === now ? s[s.length - 1].count + 1 : 1;
      s.pop();
    }
    if (s.length > 0) answer++; 
    s.push({ value: now, count });
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
