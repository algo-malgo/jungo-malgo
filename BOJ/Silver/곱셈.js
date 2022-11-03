function solution(a, b, c) {
  if (b === 1) return a % c;

  let val = solution(a, Math.floor(b / 2), c);
  val = (val * val) % c;
  return b % 2 ? (val * a) % c : val;
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
let [a, b, c] = input;

a = BigInt(a);
c = BigInt(c);

console.log(solution(a, b, c).toString());

