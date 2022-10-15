function solution(a, b) {
  return a + b;
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [a, b] = input[0].split(" ").map((item) => +item);
console.log(solution(a, b));
