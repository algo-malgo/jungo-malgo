function hanoi(a, b, n) {
  if (n === 1) {
    return `${a} ${b}\n`
  }

  let answer = '';
  answer += hanoi(a, 6 - a - b, n - 1);
  answer += `${a} ${b}\n`
  answer += hanoi(6 - a - b, b, n - 1);
  return answer;
}

function solution(n) {
  let answer = '';
  answer += `${2 ** n - 1}\n`
  answer += hanoi(1, 3, n);
  return answer;
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
).trim();

console.log(solution(+input));
