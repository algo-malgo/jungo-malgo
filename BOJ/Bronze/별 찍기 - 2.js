function solution(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i).padStart(n, ' '));
  }
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

solution(+input);
