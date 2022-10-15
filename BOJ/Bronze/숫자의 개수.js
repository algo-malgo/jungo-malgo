function solution(arr) {
  const num = Array.from({ length: 10 }, () => 0);
  const sum = String(arr.reduce((acc, cur) => acc * cur, 1));

  for (let i = 0; i < sum.length; i++) {
    num[Number(sum[i])] += 1;
  }
  console.log(num.join('\n'));
}

const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

solution(input);
