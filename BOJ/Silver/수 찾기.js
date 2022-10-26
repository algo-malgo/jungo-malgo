function solution(n_arr, m, m_arr) {
  let answer = "";

  for (let i = 0; i < m; i++) {
    let target = m_arr[i];
    let left = 0;
    let right = n_arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left < right) {
      if (target === n_arr[mid]) {
        break;
      } else if (target < n_arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((left + right) / 2);
    }
    answer += (target === n_arr[mid] ? 1 : 0) + "\n";
  }
  console.log(answer);
}

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("input.txt").toString()
)
  .trim()
  .split("\n");

let n_arr = input[1]
  .trim()
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);
let m_arr = input[3]
  .trim()
  .split(" ")
  .map((e) => +e);

solution(n_arr, +input[2], m_arr);
