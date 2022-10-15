function solution(n) {
  for (let i = n - 1; i >= 0; i--) {
    console.log(" ".repeat(2 * i).padStart(n + i, "*").padEnd(n * 2, "*"));
  }
  for (let i = 1; i < n; i++) {
    console.log(" ".repeat(2 * i).padStart(n + i, "*").padEnd(n * 2, "*"));
  }
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

solution(+input);
