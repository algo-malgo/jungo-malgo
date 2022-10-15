function solution(arr) {
  console.log(arr.reduce((acc, cur) => acc + cur, 0) / 5);
  arr.sort((a, b) => a - b);
  console.log(arr[2]);
}

const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

solution(input);
