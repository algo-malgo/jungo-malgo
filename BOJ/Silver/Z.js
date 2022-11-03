function solution(n, r, c) {
  if (n === 0) return 0;

  const half = 2 ** n / 2;

  if (r < half && c < half) {
    return solution(n - 1, r, c);
  } else if (r < half && c >= half) {
    return half * half + solution(n - 1, r, c - half);
  } else if (r >= half && c < half) {
    return 2 * half * half + solution(n - 1, r - half, c);
  } else {
    return 3 * half * half + solution(n - 1, r - half, c - half);
  }
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
)
  .trim()
  .split(" ")
  .map((e) => +e);
let [n, r, c] = input;

console.log(solution(n, r, c));
