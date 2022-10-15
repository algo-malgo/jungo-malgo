function solution(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [a, b] = input[0].split(" ").map((item) => +item);
solution(a, b);
