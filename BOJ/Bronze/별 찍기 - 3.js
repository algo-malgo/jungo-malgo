function solution(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

solution(+input);
