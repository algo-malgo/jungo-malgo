function solution(arr) {
  return arr.sort((a, b) => a - b).join(" ");
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const arr = input[0].split(" ").map((item) => +item);
console.log(solution(arr));
