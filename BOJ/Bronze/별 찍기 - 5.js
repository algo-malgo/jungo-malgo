function solution(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(2 * i - 1).padStart(n + i - 1, " "));
  }
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

solution(+input);
