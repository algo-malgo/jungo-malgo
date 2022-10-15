function solution(score) {
  let answer = 'F';
  if (score >= 90) {
    answer = 'A';
  } else if (score >= 80) {
    answer = 'B';
  } else if (score >= 70) {
    answer = 'C';
  } else if (score >= 60) {
    answer = 'D';
  }
  return answer;
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

console.log(solution(+input));
