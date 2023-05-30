const NOT_VISITED = 0;
const CYCLE_IN = -1;

function run(start, student, state) {
  let cur = start;
  while (true) {
    state[cur] = start;
    cur = student[cur];

    if (state[cur] === start) {
      while (state[cur] !== CYCLE_IN) {
        state[cur] = CYCLE_IN;
        cur = student[cur];
      }
      return;
    } else if (state[cur] !== NOT_VISITED) return;
  }
}

function solution(n, student, state) {
  for (let i = 1; i <= n; i++) {
    if (state[i] === NOT_VISITED) run(i, student, state);
  }
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (state[i] !== CYCLE_IN) count += 1;
  }
  return count;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [[_], ...tc] = input;
for (let i = 0; i < tc.length; i += 2) {
  const [n] = tc[i];
  const student = [0, ...tc[i + 1]];
  const state = Array.from({ length: n + 1 }, () => NOT_VISITED);

  console.log(solution(n, student, state));
}
