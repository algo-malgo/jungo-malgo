function solution(n, x, arr) {
  let answer = '';
  for(let i = 0; i < n; i++) {
    if (arr[i] < x) answer += arr[i] + ' ';
  }
  return answer;
}

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const [n, x] = input[0].split(" ").map((item) => +item);
const arr = input[1].split(" ").map((item) => +item);
console.log(solution(n, x, arr));
