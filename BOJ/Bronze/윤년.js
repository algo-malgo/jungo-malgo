function solution(year) {
  let leap = 0;
  if (!(year % 4) && (year % 100 || !(year % 400)))
    leap = 1;
  return leap;
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

console.log(solution(+input));
