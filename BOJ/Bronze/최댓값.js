function solution(arr) {
  const max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) return max + "\n" + (i + 1);
  }
}

const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

console.log(solution(input));
