function solution(n, arr, v) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === v) cnt += 1;
  }
  return cnt;
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
let arr = input[1].split(" ").map((item) => +item);
console.log(solution(+input[0], arr, +input[2]));
